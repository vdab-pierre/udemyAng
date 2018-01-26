import { Injectable} from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  numOfStatusChanges: number;
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  constructor(private counterService: CounterService) { }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.counter++;
    this.counterService.counterChanged.emit(this.counterService.counter);

  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.counter++;
    this.counterService.counterChanged.emit(this.counterService.counter);
  }
}
