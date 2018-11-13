import { Component, OnInit } from '@angular/core';
import { DirectPay } from '../../models/directpay.model';
import { Router } from '@angular/router';
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent {
  
  directpay: DirectPay = new DirectPay();

  constructor(private router: Router, private paymentService: PaymentService) { }

  makePayment(): void{
    this.paymentService.makePayment(this.directpay)
    .subscribe(data =>{
      alert("Payment made successfully.");
    });
  };

  
}
