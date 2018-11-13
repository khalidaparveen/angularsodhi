import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from '../customermodel/customer.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient) { }

  private customerUrl1 = 'http://localhost:8090/customermodule/customer/create';
  private customerUrl = 'http://localhost:8090/customermodule/customer/list';
 
  public getCustomers() {

    alert("list of customers");
    
    return this.http.get<Customer[]>(this.customerUrl);
  }

  public createCustomer(customer) {
    alert("customer created");
  
    return this.http.post<Customer>(this.customerUrl1, customer);
  }

}
