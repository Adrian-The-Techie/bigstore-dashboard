import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor(private _config: ConfigService, private _datePipe: DatePipe) {}

  generateExcelReport(title, data) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(title);

    //add new row
    let titleRow = worksheet.addRow([title]);
    titleRow.alignment = {
      horizontal: 'center',
      vertical: 'middle',
    };

    //set font, size and style on title row

    titleRow.font = {
      name: 'Arial',
      family: 4,
      size: 16,
      underline: 'single',
      bold: true,
    };
    worksheet.mergeCells('A1:H2');

    // Blank Row
    worksheet.addRow([]);
    // Add row with current date
    let subTitleRow = worksheet.addRow([
      'Date generated: ' + this._datePipe.transform(new Date(), 'medium'),
    ]);
    worksheet.mergeCells(`A${subTitleRow.number}:H${subTitleRow.number}`);
    subTitleRow.font = {
      italic: true,
    };
    subTitleRow.alignment = {
      horizontal: 'center',
      vertical: 'middle',
    };
    worksheet.getColumn(1).width = 30;
    worksheet.getColumn(2).width = 30;

    data.forEach((element) => {
      let row = worksheet.addRow(element);
      let qty = row.getCell(1);
      qty.font = {
        bold: true,
      };
    });

    worksheet.addRow([]);
    let footer = worksheet.addRow([
      `This is a system generated excel sheet report.`,
    ]);
    footer.font = {
      italic: true,
    };
    footer.alignment = {
      horizontal: 'center',
      vertical: 'middle',
    };
    worksheet.mergeCells(`A${footer.number}:H${footer.number}`);
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, `${title}.xlsx`);
    });
  }
  generateReportWithHeaders(title, data, headers) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(title);

    //add new row
    let titleRow = worksheet.addRow([title]);
    titleRow.alignment = {
      horizontal: 'center',
      vertical: 'middle',
    };

    //set font, size and style on title row

    titleRow.font = {
      name: 'Arial',
      family: 4,
      size: 16,
      underline: 'single',
      bold: true,
    };
    worksheet.mergeCells('A1:H2');

    // Blank Row
    worksheet.addRow([]);
    // Add row with current date
    let subTitleRow = worksheet.addRow([
      'Date generated: ' + this._datePipe.transform(new Date(), 'medium'),
    ]);
    subTitleRow.font = {
      italic: true,
    };
    subTitleRow.alignment = {
      horizontal: 'center',
      vertical: 'middle',
    };
    worksheet.mergeCells(`A${subTitleRow.number}:H${subTitleRow.number}`);

    //add headers
    headers = worksheet.addRow(headers);
    headers.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' },
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    data.forEach((element) => {
      worksheet.addRow(element);
    });
    worksheet.getColumn(2).width = 30;
    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 30;
    worksheet.getColumn(5).width = 30;
    worksheet.getColumn(6).width = 30;

    worksheet.addRow([]);
    let footer = worksheet.addRow([
      `This is a system generated excel sheet report.`,
    ]);
    footer.font = {
      italic: true,
    };
    footer.alignment = {
      horizontal: 'center',
      vertical: 'middle',
    };
    worksheet.mergeCells(`A${footer.number}:H${footer.number}`);
    //save file
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, `${title}.xlsx`);
    });
  }
}
