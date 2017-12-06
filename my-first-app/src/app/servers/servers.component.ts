import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //of
  selector:'[app-servers]', // maar nu moeten we in de html een el hebben met als attribuut die selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus="No server was created!";
serverName='testserver';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus='Server was created! Name is '+this.serverName;
  }

  /* onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement> event.target).value;
  } */
}
