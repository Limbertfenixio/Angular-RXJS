import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { interval, timer, fromEvent, of, Observable, range, concat, Subject, merge, empty, forkJoin, throwError } from 'rxjs';
import { filter, map, tap, mapTo, share, take, takeUntil, scan, switchMap, startWith, takeWhile, delay, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'rxjs';
  @ViewChild('el1', {static: true}) el: ElementRef;
  @ViewChild('el2', null) e2: ElementRef;
  @ViewChild('el3', null) e3: ElementRef;
  @ViewChild('p', {static: true}) pause: ElementRef;
  @ViewChild('r', null) resume: ElementRef;
  @ViewChild('reset', null) reset: ElementRef;
  @ViewChild('result', null) result: ElementRef;
  stop$ = new Subject<any>();
  constructor(){
  }

  ngAfterViewInit(){
    const number$ = of(2,3,4,5,6,7,'hola');
  }
}
