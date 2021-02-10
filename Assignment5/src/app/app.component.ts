import { Component, OnInit } from '@angular/core';
import { Users } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private user:Users){}
  
  ngOnInit(){
  }

}
