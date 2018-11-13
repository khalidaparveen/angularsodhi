import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-Vehicle.component.html',
  styleUrls: ['./add-Vehicle.component.css']
})
export class AddVehicleComponent {

 

  vehicle: Vehicle = new Vehicle();
  constructor(private router: Router, private vehicleService: VehicleService) { }

  createPolicy(): void {
    this.vehicleService.createPolicy(this.vehicle)
        .subscribe( data => {
          alert("Vehicle saved successfully.");
        });

  };
}






