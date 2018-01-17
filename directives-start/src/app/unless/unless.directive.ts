import { Directive, Input, TemplateRef,ViewContainerRef} from '@angular/core';
import {  } from '@angular/core/src/linker/view_container_ref';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition:boolean){
    if (!condition) {
      this.vcref.createEmbeddedView(this.templateRef)
    } else {
      this.vcref.clear();
    }
  }
  constructor(private templateRef:TemplateRef<any>,private vcref:ViewContainerRef) { }
}