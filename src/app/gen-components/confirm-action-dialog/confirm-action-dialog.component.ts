import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-action-dialog',
  templateUrl: './confirm-action-dialog.component.html',
  styles: [],
})
export class ConfirmActionDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    if (this.data.items == undefined) {
      this.data.items = [];
    }
    if (this.data.end == undefined) {
      this.data['end'] = '';
    }
    if (this.data.type == undefined) {
      this.data.type = '';
    }
  }
  ok() {
    return true;
  }
}
