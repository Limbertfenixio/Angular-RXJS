import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class tapOperator {
  ngAfterViewInit(){
    const number$ = of(2,3,4,5,6,7,'hola');
    this.tap(number$)
  }

  /**
   * Realice un efecto secundario para cada emisión en la fuente Observable, pero devuelva un Observable que sea idéntico a la fuente.
   */
  tap(number: Observable<number | string>){
    number.pipe(tap(next => {
      console.log(next)
      if(next === 2){
        console.log('Si ' + next * 2)
      }
    }, err => {
      console.log('El error es : ' + err)
    }, ()=> {
      console.log('se ha completado la petición')
    })).subscribe((data) => {})
  }
}
