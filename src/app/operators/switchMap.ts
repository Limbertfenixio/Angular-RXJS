import { ViewChild, ElementRef } from '@angular/core';
import { fromEvent, interval, merge, empty } from 'rxjs';
import { switchMap, mapTo, scan, startWith, takeWhile } from 'rxjs/operators';

export class switchMapOperator {
  @ViewChild('p', {static: true}) pause: ElementRef;
  @ViewChild('r', null) resume: ElementRef;
  @ViewChild('reset', null) reset: ElementRef;
  @ViewChild('result', null) result: ElementRef;

  ngAfterViewInit(){
    this.switchMap1();
    this.switchMap2();
  }
  switchMap1(){
    fromEvent(this.el.nativeElement, 'click').pipe(switchMap(() => interval(1000))).subscribe(data => {console.log(data)})
  }

  switchMap2(){
    const interval$ = interval(1000).pipe(mapTo(-1))
    const pause$ = fromEvent(this.pause.nativeElement, 'click').pipe(mapTo(false))
    const resume$ = fromEvent(this.resume.nativeElement, 'click').pipe(mapTo(true))
    const reset$ = fromEvent(this.reset.nativeElement, 'click').pipe(switchMap(() => interval$), mapTo(true))

    const timer$ = merge(pause$, resume$, reset$).pipe(
      startWith(true),
      switchMap(val => (val ? interval$ : empty())),
      scan((acc, value) => (value ? value +  acc: acc), 10),
      takeWhile(v => v >= 0)
    ).subscribe((val: any) => {
      console.log(val)
      this.result.nativeElement.innerHTML = val;
    })
  }
}
