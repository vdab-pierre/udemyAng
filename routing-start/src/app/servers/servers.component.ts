import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReloadPage(){
    //was enkel ter demo van relative paths, geeft nu een fout natuurlijk, er bestaat geen servers/servers route
    //this.router.navigate(['servers'],{relativeTo:this.route})
  }
}
