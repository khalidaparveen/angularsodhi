import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { AppRoutingModule } from './app.routing.module';
import {PaymentService} from './payment/payment.service';
import {HttpClientModule} from "@angular/common/http";
import {AddPaymentComponent} from './payment/add-payment.component';
@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    AddPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

