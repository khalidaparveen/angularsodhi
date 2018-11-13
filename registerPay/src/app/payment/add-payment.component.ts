import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisteredPay } from '../models/registerpay.model';
import {  PaymentService } from './payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent {

 

  registeredpay: RegisteredPay = new RegisteredPay();
  constructor(private router: Router, private paymentService: PaymentService) { }

  makePayment(): void {
    this.paymentService.makePayment(this.registeredpay)
        .subscribe( data => {
          alert("Payment done successfully.");
        });

  };
}






