import { Component, OnInit, Input, AfterContentInit, ViewEncapsulation,ContentChild,ElementRef } from '@angular/core';



@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,AfterContentInit {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('Textcontent of paragraph:'+this.paragraph.nativeElement.Textcontent);
  }

}
