import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleComponent } from './vehicle/vehicle.component';
import {AddVehicleComponent} from './vehicle/add-vehicle.component';


const routes: Routes = [
  { path: '', component: VehicleComponent },
  { path: 'policies', component: VehicleComponent },
  { path: 'addpolicy', component: AddVehicleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
