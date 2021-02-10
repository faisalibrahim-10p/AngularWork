import { Injectable } from "@angular/core";


@Injectable()
export class Counter{
    activeToInactive = 0;
    inactiveToActive = 0;    

    incrementActiveToInactive(){
        this.activeToInactive++
        console.log(this.activeToInactive);
    }

    incrementInactiveToActive(){
        this.inactiveToActive++
        console.log(this.inactiveToActive);
    }
}