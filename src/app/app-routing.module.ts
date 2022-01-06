import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SystemComponent } from './components/system/system.component';
import { CategoryFormComponent } from './gen-components/category-form/category-form.component';
import { ProductFormComponent } from './gen-components/product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'system',
    pathMatch: 'full',
  },
  {
    path: 'system',
    component: SystemComponent,
    children: [
      {
        path: 'newCategory',
        component: CategoryFormComponent,
      },
      {
        path: 'newProduct',
        component: ProductFormComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
