import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentComponent } from './payments/add-payment/add-payment.component';
import { PaymentComponent } from './payments/payment/payment.component';

const routes: Routes = [{ path: '', component: PaymentComponent },
{ path: 'payments', component: PaymentComponent },
{ path: 'makepayment', component: AddPaymentComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
