import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment4';

  oddNumber:number[] = [];
  evenNumber:number[] = [];

  onIntervalFired(firedNumber: number){
    console.log(firedNumber);
    (firedNumber%2 == 0)? this.evenNumber.push(firedNumber):this.oddNumber.push(firedNumber) ;
  }


}
