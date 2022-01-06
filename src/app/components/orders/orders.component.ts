import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [],
})
export class OrdersComponent implements OnInit {
  data = {
    title: 'Orders',
    columns: ['#', 'customer', 'Number of items'],
    data: [
      [1, 'Adrian muthomi', '4'],
      [1, 'Victor Mbuni', '7'],
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
