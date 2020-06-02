import { of, Observable, concat, range } from 'rxjs';
import { take } from 'rxjs/operators';

export class concatObserver {
  ngAfterViewInit(){
    const number$ = of(2,3,4,5,6,7,'hola');
    this.concat(number$)
  }
  /**
   *
   * Crea un Observable de salida que emite secuencialmente todos los valores del Observable dado y luego pasa al siguiente.
   */
  concat(number: Observable<number | string>){
    const o1 = number.pipe(take(2))
    const o2 = range(3,7);

    const oc = concat(o1, o2);
    oc.subscribe(data => {
      console.log(data)
    })
  }

  /**
   *
   * Emite solo los primeros countvalores emitidos por la fuente Observable.
   */
  take(number: Observable<number | string>){
    const o1 = number.pipe(take(2))
  }

  /**
   * Crea un Observable que emite una secuencia de números dentro de un rango especificado.
   */
  range(){
    const o2 = range(3,7);
  }
}
