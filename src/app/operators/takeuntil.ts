import { Subject, interval } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

export class takeUntilOperator {
  stop$ = new Subject<void>();

  ngAfterViewInit(){
    const obs1 = interval(1000).pipe(takeUntil(this.stop$)).subscribe(console.log);
    const obs2 = interval(1000).pipe(takeUntil(this.stop$)).subscribe(console.log);
    const obs3 = interval(1000).pipe(takeUntil(this.stop$),map((value: number) => {
      if(value == 6){
        this.stopTakeUntil()
        return value;
      }
      return value;
    })).subscribe(console.log);
  }

  /**
   * Emite los valores emitidos por la fuente Observable hasta que un notifier Observable emite un valor.
   */
  stopTakeUntil(){
    this.stop$.next();
    this.stop$.complete();
  }
}
