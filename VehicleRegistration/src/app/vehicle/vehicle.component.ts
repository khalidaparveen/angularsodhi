import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-user',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private router: Router, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getVehicles()
      .subscribe( data => {        
        this.vehicles = data;
      
      });
    };
   

  }


