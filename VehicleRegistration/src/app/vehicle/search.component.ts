import { Component } from "@angular/core";
import { Vehicle } from "../models/vehicle.model";
import { Router } from "@angular/router";
import { VehicleService } from "./vehicle.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
  })
export class SearchComponent{
    vehicles:Vehicle[];
    policy_id:string;
  constructor(private router: Router, private vehicleService: VehicleService) { }
  ngOnInit() {
    this.policy_id = null;
  }
 
  private searchPolicy() {
    this.vehicleService.searchPolicy(this.policy_id)
      .subscribe(vehicles => this.vehicles = vehicles);
  }
 
  onSubmit() {
    this.searchPolicy();
  }
 
}