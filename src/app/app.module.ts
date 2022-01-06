import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './gen-components/data-table/data-table.component';
import { CategoryFormComponent } from './gen-components/category-form/category-form.component';
import { SystemComponent } from './components/system/system.component';
import { TopBarComponent } from './gen-components/top-bar/top-bar.component';
import { SideBarComponent } from './gen-components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfirmActionDialogComponent } from './gen-components/confirm-action-dialog/confirm-action-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './gen-components/product-form/product-form.component';
import { CustomerDocsComponent } from './gen-components/customer-docs/customer-docs.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    CategoryFormComponent,
    SystemComponent,
    TopBarComponent,
    SideBarComponent,
    ConfirmActionDialogComponent,
    ProductFormComponent,
    CustomerDocsComponent,
    CustomersComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
