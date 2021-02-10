import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  
  constructor(private user:Users){ }

  ngOnInit(){
    this.users = this.user.activeUsers;
  }

  onSetToInactive(id: number) {
    this.user.onSetToInactive(id);
  }
}
