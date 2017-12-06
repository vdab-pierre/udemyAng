import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPassword=false;
  aantKliks:number=0;
  klikNr:number=0;
  kliks=[];
  toggleDisplayPassword(){
    this.displayPassword= !this.displayPassword;
    this.aantKliks++;
    this.klikNr=this.aantKliks;
    /* this.kliks.push(this.aantKliks); */
    this.kliks.push(new Date());
  }
}
