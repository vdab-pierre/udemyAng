import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers=[];

  onAddServer() {
    this.servers.push(`Another Server ${this.servers.length + 1}`);
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }
}
