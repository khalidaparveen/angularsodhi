import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CancelComponent } from './cancel/cancel.component';
import { AppRoutingModule } from './app.routing.module';
import {CancelService} from './cancel/cancel.service';
import {HttpClientModule} from "@angular/common/http";
import {AddCancelComponent} from './cancel/add-cancel.component';
@NgModule({
  declarations: [
    AppComponent,
    CancelComponent,
    AddCancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CancelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

