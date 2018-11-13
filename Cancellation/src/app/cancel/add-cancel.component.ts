import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cancellation } from '../models/cancellation.model';
import { CancelService } from './cancel.service';

@Component({
  selector: 'app-add-cancel',
  templateUrl: './add-cancel.component.html',
  styleUrls: ['./add-cancel.component.css']
})
export class AddCancelComponent {

 

  cancellation: Cancellation = new Cancellation();
  constructor(private router: Router, private cancelService: CancelService) { }

  cancelPolicy(): void {
    this.cancelService.cancelPolicy(this.cancellation)
        .subscribe( data => {
          alert("Policy cancelled successfully.");
        });

  };
}






