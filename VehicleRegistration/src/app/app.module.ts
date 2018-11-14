import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AppRoutingModule } from './app.routing.module';
import {VehicleService} from './vehicle/vehicle.service';
import {HttpClientModule} from "@angular/common/http";
import {AddVehicleComponent} from './vehicle/add-vehicle.component';
import { SearchComponent } from './vehicle/search.component';
@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    AddVehicleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

