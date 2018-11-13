import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { RegisteredPay } from '../models/registerpay.model';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PaymentService {

  constructor(private http:HttpClient) { }

  private registeredpayUrl1 = 'http://localhost:8090/paymodule/pay/create';
  private registeredpayUrl = 'http://localhost:8090/paymodule/pay/list';
 
  public getPayments():Observable<RegisteredPay[]> {

    
    
    return this.http.get<RegisteredPay[]>(this.registeredpayUrl);
  }

  public makePayment(registeredpay) {

  
    return this.http.post<RegisteredPay>(this.registeredpayUrl1, registeredpay,httpOptions);
  }

}
