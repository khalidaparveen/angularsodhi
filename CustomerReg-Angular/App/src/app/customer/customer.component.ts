import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customermodel/customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe( data => {        
        this.customers = data;
        alert(data.length);
      });
    };
   

  }


