import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import {AddCustomerComponent} from './customer/add-customer.component';


const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'addcustomer', component: AddCustomerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
