import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styles: [],
})
export class SnackbarComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit(): void {}

  conditionalFormatting(status: any) {
    let color = '';

    return (color =
      status == 1
        ? 'text-success do-not-show-on-print'
        : 'text-danger do-not-show-on-print');
  }
}
