import { ajax } from 'rxjs/ajax';
import { forkJoin, of, interval, throwError } from 'rxjs';
import { delay, take, mergeMap, catchError } from 'rxjs/operators';

export class forkJoinObservable {
  ngAfterViewInit(){
    this.forkJoin1();
    this.forkJoin2();
    this.forkJoin3();
    this.forkJoin4();
  }

  /**
   * When all observables complete, emit the last emitted value from each.
   */
  forkJoin1(){
    const google$ = ajax.getJSON('https://api.github.com/users/google')
    const microsoft$ = ajax.getJSON('https://api.github.com/users/microsoft')
    const users$ = ajax.getJSON('https://api.github.com/users')
    forkJoin(google$, microsoft$, users$).subscribe(console.log);
  }

  forkJoin2(){
    const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise resolved: ${val}`), 5000));

    const example = forkJoin(
      of('hello'),
      of('World').pipe(delay(1000)),
      interval(1000).pipe(take(1)),
      interval(1000).pipe(take(2)),
      myPromise('RESULT')
    );

    const subscribe = example.subscribe(val => console.log(val));
  }

  forkJoin3(){
    const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise resolved: ${val}`), 5000));

    const source = of([1,2,3,4,5]);

    const example = source.pipe(mergeMap(q => forkJoin(...q.map(myPromise))));

    const subscribe = example.subscribe(val => console.log(val));
  }

  forkJoin4(){
    const example = forkJoin(
      of('hello'),
      of('Wold').pipe(delay(1000)),
      throwError('Ha ocurrido un error en el 3er observable')
    ).pipe(catchError(error => of(error)));

    const subscribe = example.subscribe(val => console.log(val));
  }
}
