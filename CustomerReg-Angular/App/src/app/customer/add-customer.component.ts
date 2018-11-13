import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customermodel/customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

 

  customer: Customer = new Customer();
  constructor(private router: Router, private customerService: CustomerService) { }

  createCustomer(): void {
    this.customerService.createCustomer(this.customer)
        .subscribe( data => {
          alert("Customer created successfully.");
        });

  };
}






