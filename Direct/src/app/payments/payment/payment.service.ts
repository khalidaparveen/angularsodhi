import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { DirectPay } from "../../models/directpay.model";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class PaymentService{
    constructor(private http:HttpClient){}

    private paymentUrl1='http://localhost:8090/DirectPaymodule/DirectPay/create';
    private paymentUrl='http://localhost:8090/DirectPaymodule/DirectPay/list';

    public getPayments(){
        alert("list of payment");

        return this.http.get<DirectPay[]>(this.paymentUrl);
    }
    public makePayment(directpay){
        

        return this.http.post<DirectPay>(this.paymentUrl1,directpay);
    }
}