import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivated = false;
  private activatedSub: Subscription;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit() { 
    // this.firstObsSubscribtion = interval(1000).subscribe(
    //   (count) => { console.log(count); }
    // );
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (didActivate) => {
        this.userActivated=didActivate;
      }
    );
  }

  ngOnDestroy(){
    this.activatedSub.unsubscribe();
  }
  
}
