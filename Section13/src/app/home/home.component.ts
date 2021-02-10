import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscribtion: Subscription;

  constructor() { }

  ngOnInit(){
    const customObservableInterval = Observable.create (
      (observer) => {
        let count = 0;
        setInterval( () => {
            observer.next(count);
            if(count == 2){
              observer.complete();
            }
            if(count>3){
              observer.error(new Error('count is greater then 3'));
            }
            count++;
          },1000);
      });

    
  
    this.firstObsSubscribtion = customObservableInterval.pipe(
      map(
        (data:number) => {
          return 'Round' + (data+1);
        }
      ),
      filter(
        data => {
          return data>0;
        }
      )
    ).subscribe(
      data  => { 
        console.log(data); 
      },
      error => { 
        alert(error.message); 
      },
      () => {
        console.log('Completed');
      }
    );

  }

ngOnDestroy() {
  console.log('destroy working');
  this.firstObsSubscribtion.unsubscribe();
}

}
