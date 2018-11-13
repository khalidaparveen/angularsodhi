import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TheftClaim } from '../models/theftclaim.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

 

  theftclaim: TheftClaim = new TheftClaim();
  constructor(private router: Router, private userService: UserService) { }

  createClaim(): void {
    this.userService.createClaim(this.theftclaim)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };
}






