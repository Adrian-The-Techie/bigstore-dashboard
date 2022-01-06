import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';

@Component({
  selector: 'app-customer-docs',
  templateUrl: './customer-docs.component.html',
  styles: [],
})
export class CustomerDocsComponent implements OnInit {
  customerDocs = {
    kraCert: '',
    national_id: '',
  };
  logo = '';
  disabled = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<CustomerDocsComponent>
  ) {}

  ngOnInit(): void {}
  getPinCert(event: any) {
    const image = event.target.files[0];
    this.customerDocs.kraCert = image;

    this.disabled = false;
  }
  getNationalId(event: any) {
    const image = event.target.files[0];
    this.customerDocs.national_id = image;

    this.disabled = false;
  }
  getLogo(event: any) {
    const image = event.target.files[0];
    this.logo = image;

    this.disabled = false;
  }
  save() {
    this._dialog
      .open(ConfirmActionDialogComponent, {
        data: {
          message: this.data.message,
        },
      })
      .afterClosed()
      .subscribe((response) => {
        if (response == undefined || response == '') {
          return;
        } else {
          if (response) {
            if (this.data.thumbnail) {
              this._dialogRef.close(this.logo);
            } else {
              this._dialogRef.close(this.customerDocs);
            }
          }
        }
      });
  }
}
