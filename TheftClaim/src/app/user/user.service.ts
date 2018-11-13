import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TheftClaim } from '../models/theftclaim.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  private userUrl1 = 'http://localhost:8090/theftClaimmodule/theftClaim/create';
  private userUrl = 'http://localhost:8090/theftClaimmodule/theftClaim/list';
 
  public getUsers() {

    alert("list of user");
    
    return this.http.get<TheftClaim[]>(this.userUrl);
  }

  public createClaim(theftclaim) {

  
    return this.http.post<TheftClaim>(this.userUrl1, theftclaim);
  }

}
