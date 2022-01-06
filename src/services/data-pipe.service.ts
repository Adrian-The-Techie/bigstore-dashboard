import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataPipeService {
  //
  customer: any = {
    id: '',
    name: '',
    email: '',
    phone: '',
  };
  items = [];
  constructor() {}
}
