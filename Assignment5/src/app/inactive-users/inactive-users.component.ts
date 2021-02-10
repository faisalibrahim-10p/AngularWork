import { Component, OnInit } from '@angular/core';
import { Users } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private user:Users){ }

  ngOnInit(){
    this.users = this.user.inactiveUsers;
  }


  onSetToActive(id: number) {
    this.user.onSetToActive(id);
  }
}
