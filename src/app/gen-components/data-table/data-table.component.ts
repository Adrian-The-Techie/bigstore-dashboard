import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styles: [],
})
export class DataTableComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
