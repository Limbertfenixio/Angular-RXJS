import { of, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export class mapToOperator{
  ngAfterViewInit(){
    const number$ = of(2,3,4,5,6,7,'hola');
    this.mapTo(number$)
  }

  /**
   * Emite el valor constante dado en la salida Observable cada vez que la fuente Observable emite un valor.
   */
  mapTo(number: Observable<number | string>){
    const example = number.pipe(mapTo('Hello World'));
    const subscribe = example.subscribe(val => console.log(val))
  }
}
