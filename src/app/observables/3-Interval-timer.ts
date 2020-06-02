import { interval, timer } from 'rxjs';

export class IntervalTimer {

  constructor(){
    this.interval();
    this.timer();
  }

  /**
   * Crea un Observable que emite números secuenciales cada intervalo de tiempo especificado, en un determinado SchedulerLike.
   */
  interval(){
   interval(1000).subscribe((number) => {
    console.log(number)
   })
  }

  /**
   * Crea un Observable que comienza a emitir después de an dueTime y emite números cada vez mayores después de cada periodo de tiempo posterior.
   */
  timer(){
    const numbert = timer(5000, 1000).subscribe((number) => {

      console.log(number);
    });
  }
}
