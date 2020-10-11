import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  Watchable: Observable<any>;


  constructor(private http: HttpClient)  {
  }
  getData(): Observable<any> {
    if (this.Watchable) {
      return this.Watchable;
    } else {
      this.Watchable = this.http.get('http://localhost:3000/budget').pipe(shareReplay());
      return this.Watchable;
    }
  }
}
