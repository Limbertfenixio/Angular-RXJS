import { ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

export class fromEventObservable {
  @ViewChild('el1', {static: true}) el: ElementRef;
  @ViewChild('el2', null) e2: ElementRef;
  @ViewChild('el3', null) e3: ElementRef;
  ngAfterViewInit(){
    this.fromEvent();
  }
  /**
   * Crea un Observable que emite eventos de un tipo específico que provienen del destino del evento dado.
   */
  fromEvent(){
    const mouse = fromEvent(this.e2.nativeElement, 'mousemove').subscribe((event: MouseEvent) => {
      console.log(event)
    })

    const key= fromEvent(this.e3.nativeElement, 'input').subscribe((event: any) => {
      console.log(event.target.value)
    })

    const click = fromEvent(this.el.nativeElement, 'click').subscribe((event) => {
      console.log(event);
      key.unsubscribe();
    });
  }
}
