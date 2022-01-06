import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [],
})
export class CustomersComponent implements OnInit {
  data = {
    title: 'Customers',
    columns: ['#', 'Name', 'Date added'],
    data: [[1, 'Adrian muthomi', '2020-4-7']],
  };
  constructor() {}

  ngOnInit(): void {}
}
