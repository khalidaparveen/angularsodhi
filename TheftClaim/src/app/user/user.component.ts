import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TheftClaim } from '../models/theftclaim.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: TheftClaim[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {        
        this.users = data;
        
      });
    };
   

  }


