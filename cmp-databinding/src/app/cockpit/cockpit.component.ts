import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput,serverContentInput) {
    this.serverCreated.emit({serverName:serverNameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput,serverContentInput) {
    this.blueprintCreated.emit({serverName:serverNameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }
}
