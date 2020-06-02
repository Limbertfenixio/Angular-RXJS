import { interval, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export class mergeObservable {

  ngAfterViewInit(){
    this.merge();
  }

  /**
   * Crea una salida Observable que emite simultáneamente todos los valores de cada entrada Observable.
   */
  merge(){
    const first = interval(1000);
    const second = interval(1000);
    const third = interval(1000);
    const fourth = interval(1000);

    const example = merge(
      first.pipe(mapTo('FIRST!')),
      second.pipe(mapTo('SECOND!')),
      third.pipe(mapTo('THIRD!')),
      fourth.pipe(mapTo('FOURTH!')),
    );

    const subscribe = example.subscribe(val => console.log(val))
  }
}
