import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import { DirectPay } from '../../models/directpay.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  payments: DirectPay[];

  constructor(private router: Router, private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getPayments()
    .subscribe(data =>{
      this.payments = data;
      console.log(this.payments);
      alert(data.length);
    });
    
  };

}
