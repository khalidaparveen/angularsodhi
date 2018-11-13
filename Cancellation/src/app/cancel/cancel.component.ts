import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cancellation } from '../models/cancellation.model';
import { CancelService } from './cancel.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  cancels: Cancellation[];

  constructor(private router: Router, private userService: CancelService) { }

  ngOnInit() {
    this.userService.getCancels()
      .subscribe( data => {        
        this.cancels = data;
        alert(data.length);
      });
    };
   

  }


