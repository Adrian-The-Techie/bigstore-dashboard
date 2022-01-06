import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/gen-components/snackbar/snackbar.component';
// import { MatDialog } from '@angular/material/dialog';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Router } from '@angular/router';
// import { SnackbarComponent } from '../gen-components/snackbar.component';
// import { ErrorModalComponent } from '../modals/error-modal/error-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // public uri = 'https://successcoach.co.ke/test/beta_kilimo/api/';
  // public uri = 'http://localhost/beta-kilimo/api/';
  public uri = 'https://bigstore-bknd.herokuapp.com/chicfavs/';
  public months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];
  dialogConfig = {
    data: {
      message: '',
    },
    width: '550px',
    height: '240px',
  };
  range = {
    from: new Date(),
    to: new Date(),
  };

  constructor(
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  showSnackBar(response: any) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: 5000,
      data: response,
    });
  }
  // prepareDateTime(date?) {
  //   let dateInstance = new Date(date);
  //   let time = dateInstance.getTime();
  //   return Math.floor(time / 1000);
  // }
  // getTime(date) {
  //   let dateInstance = new Date(this.prepareDateTime(date));
  //   let time = dateInstance.getTime();
  //   // let preparedDate = year + '-' + month + '-' + day;
  //   return time;
  // }
  // formatDate(date) {
  //   let dateInstance = new Date(date);
  //   let year = dateInstance.getFullYear();
  //   let month = dateInstance.getMonth() + 1;
  //   let day = dateInstance.getDate();

  //   let preparedDate = year + '-' + month + '-' + day;
  //   return preparedDate;
  // }
  // prepareDates(dateNumber, year?) {
  //   let dates = [];
  //   if (
  //     dateNumber == 0 ||
  //     dateNumber == 2 ||
  //     dateNumber == 4 ||
  //     dateNumber == 6 ||
  //     dateNumber == 7 ||
  //     dateNumber == 9 ||
  //     dateNumber == 11
  //   ) {
  //     for (let i = 1; i <= 31; i++) {
  //       dates.push(i);
  //     }
  //   } else if (
  //     dateNumber == 3 ||
  //     dateNumber == 5 ||
  //     dateNumber == 8 ||
  //     dateNumber == 10
  //   ) {
  //     for (let i = 1; i <= 30; i++) {
  //       dates.push(i);
  //     }
  //   } else if (dateNumber == 1) {
  //     if ((year && 4) == 0) {
  //       for (let i = 1; i <= 29; i++) {
  //         dates.push(i);
  //       }
  //     } else {
  //       for (let i = 1; i <= 28; i++) {
  //         dates.push(i);
  //       }
  //     }
  //   }
  //   return dates;
  // }
  // getValue(key) {
  //   return localStorage.getItem(key);
  // }
  // showConnectionError() {
  //   this._dialog.open(ErrorModalComponent);
  // }
  // getDocument(doc_type) {
  //   let document = '';
  //   switch (doc_type) {
  //     case 'INV':
  //       document = 'INVOICE';
  //       break;
  //     case 'CSH':
  //       document = 'CASH SALE';
  //       break;
  //     case 'POA':
  //       document = 'PAYMENT TO ACCOUNT';
  //       break;
  //     case 'POA-CL':
  //       document = 'PAYMENT TO ACCOUNT';
  //       break;
  //     case 200:
  //       document = 'Administrator';
  //       break;
  //     case 100:
  //       document = 'Cashier';
  //       break;

  //     default:
  //       'INVALID DOCUMENT';
  //   }
  //   return document;
  // }
  createDate(string: string) {
    let dateArray = string.split('-');
    let year = dateArray[2];
    let month = dateArray[1];
    let date = dateArray[0];
    return new Date(
      Number.parseInt(year),
      Number.parseInt(month) - 1,
      Number.parseInt(date)
    );
  }
}
