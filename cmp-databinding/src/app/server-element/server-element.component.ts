import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
@Input('srvElement') element:{
    type:string,
    name:string,
    content:string
  }
  constructor() { }

  ngOnInit() {
  }

}
