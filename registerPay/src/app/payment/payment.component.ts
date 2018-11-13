import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisteredPay } from '../models/registerpay.model';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments: RegisteredPay[];

  constructor(private router: Router, private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getPayments()
      .subscribe( data => {        
        this.payments = data;
        
        
      });
    };
   

  }


