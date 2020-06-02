import { of, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

export class shareOperator {
  ngAfterViewInit(){
    const number$ = of(2,3,4,5,6,7,'hola');
    this.share(number$)
  }


  /**
   *
   * Devuelve un nuevo Observable que multicasts (comparte) el Observable original. Mientras haya al menos un Suscriptor, este Observable se suscribirá y emitirá datos. Cuando todos los suscriptores se hayan dado de baja, se dará de baja de la fuente Observable. Debido a que el Observable es multidifusión, hace la transmisión hot. Este es un alias para multicast(() => new Subject()), refCount().
   */
  share(number: Observable<number | string>){
    const o = number.pipe(share())

    o.subscribe((data) => {});
    o.subscribe((data) => {});
  }
}
