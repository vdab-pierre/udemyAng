import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class CounterService {
  counter:number=0;
  counterChanged=new EventEmitter<number>();
}
