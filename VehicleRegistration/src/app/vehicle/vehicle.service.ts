import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Vehicle } from '../models/vehicle.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VehicleService {

  constructor(private http:HttpClient) { }

  private vehicleUrl1 = 'http://localhost:8090/vehiclemodule/vehicle/create';
  private vehicleUrl = 'http://localhost:8090/vehiclemodule/vehicle/list';
 
  public getVehicles() {

  
    
    return this.http.get<Vehicle[]>(this.vehicleUrl);
  }

  public createPolicy(vehicle) {

  
    return this.http.post<Vehicle>(this.vehicleUrl1, vehicle);
  }

}
