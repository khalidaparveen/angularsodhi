import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelComponent } from './cancel/cancel.component';
import {AddCancelComponent} from './cancel/add-cancel.component';


const routes: Routes = [
  { path: '', component: CancelComponent },
  { path: 'cancels', component: CancelComponent },
  { path: 'cancelpolicy', component: AddCancelComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
