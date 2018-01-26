import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  aantStatusChanged: number;
  constructor(private counterService: CounterService) {
    this.counterService.counterChanged.subscribe(
      (counter: number) => this.aantStatusChanged = counter
    );
  }
  ngOnInit() {
    this.aantStatusChanged=this.counterService.counter;
  }
}
