import { scan } from 'rxjs/operators';
import { Subject } from 'rxjs';

export class scanOperator {
  subject$ = new Subject<any>();
  ngAfterViewInit(){
    this.scan();
  }

  scan(){
    const example = this.subject$.pipe(scan((acc, value) => Object.assign({}, acc, value)));

    const subscribe = example.subscribe(val => console.log('acumulado con scan: ' + JSON.stringify(val)));

    this.subject$.next({name: 'Alexa'});
    this.subject$.next({age: 15});
    this.subject$.next({languaje: 'JavaScript'});
  }
}
