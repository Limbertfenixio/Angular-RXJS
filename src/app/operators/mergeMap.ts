import { ViewChild, ElementRef } from '@angular/core';
import { of, fromEvent, interval } from 'rxjs';
import { delay, mergeMap, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

export class mergeMapOperator {
  @ViewChild('el1', {static: true}) el: ElementRef;
  ngAfterViewInit(){
    this.mergeMap1()
  }
  /**
   * Proyecta cada valor de origen en un Observable que se fusiona en el Observable de salida.
   */
  mergeMap1(){
    const saveLocation = location => {
      return of(location).pipe(delay(1000));
    }

    const click$ = fromEvent(this.el.nativeElement, 'click');

    click$.pipe(
      mergeMap((e: MouseEvent) => {
        return saveLocation({x: e.clientX, y: e.clientY, timestamp: Date.now()})
      })
    ).subscribe(val => console.log('Saved', val));
  }

  mergeMap2(){
    const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

    const click$ = fromEvent(this.el.nativeElement, 'click');

    click$.pipe(
      mergeMap(() => ajax.getJSON(API_URL))
    ).subscribe(val => console.log(val))
  }

  mergeMap3(){
    const myPromise = val => new Promise(resolve => resolve(`${val} mundo desde el Promise!`));

    const source$ = of('Hello');

    source$.pipe(mergeMap(val => myPromise(val))).subscribe(val => console.log(val))
  }

  mergeMap4(){
    const myPromise = val => new Promise(resolve => resolve(`${val} mundo desde el Promise!`));

    const source$ = of('Hello');

    source$.pipe(mergeMap(
      val => myPromise(val),
      /*
      you can also supply a second argument which receives the source value and emitted
      value of inner observable or promise
    */
      (valueFromSrc, valueFromPromise) => {
        return `Source: ${valueFromSrc}, Promise: ${valueFromPromise}`;
      }
      )).subscribe(val => console.log(val))
  }

  mergeMap5(){
    const source$ = interval(1000);

    source$.pipe(mergeMap(
      val => interval(5000).pipe(take(2)),
      /*
      you can also supply a second argument which receives the source value and emitted
      value of inner observable or promise
    */
      (outVal, inVal, outIndex, inIndex) => [outIndex, outVal, inIndex, inVal]
      )).subscribe(val => console.log(val))
  }
}
