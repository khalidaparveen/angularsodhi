import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cancellation } from '../models/cancellation.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CancelService {

  constructor(private http:HttpClient) { }

  private cancellationUrl1 = 'http://localhost:8090/cancelmodule/cancel/create';
  private cancellationUrl = 'http://localhost:8090/cancelmodule/cancel/list';
 
  public getCancels() {

    alert("list of cancels");
    
    return this.http.get<Cancellation[]>(this.cancellationUrl);
  }

  public cancelPolicy(cancellation) {

  
    return this.http.post<Cancellation>(this.cancellationUrl1, cancellation);
  }

}
