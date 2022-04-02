import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;
  

  constructor() {}

  start(ns: number) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
},ns );
    }
  }

  stop() {
    if(this.timer){
      clearInterval(this.timer);

    }
  }
  reset() {
    this.counter = null;
  }
  getCount() {
    return this.counter;
  }
}
