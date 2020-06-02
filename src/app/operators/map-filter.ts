import { of, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class mapFilter{


  ngAfterViewInit(){
    const number$ = of(2,3,4,5,6,7,'hola');
    //this.filter(number$)
    this.map(number$)
  }

  /**
   * Filtra los elementos emitidos por la fuente Observable emitiendo solo aquellos que satisfacen un predicado específico.
   */
  filter(number: Observable<number | string>){
    number.pipe(filter((data: number, index: number) => data % 2 === 0 && index === 2, 5)).subscribe(data => {
      console.log(data)
    })
  }

  /**
   * Aplica una project función dada a cada valor emitido por la fuente Observable, y emite los valores resultantes como un Observable.
   */
  map(number: Observable<number | string>){
    number.pipe(map((data: any, index: number) => {
      if(data === 'hola'){
        return data += ' limbert'
      }
      if(index === 4){
        return data * 2;
      }
      return data;
    })).subscribe((data) => {
      console.log(data);
    })
  }
}
