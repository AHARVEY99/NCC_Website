import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class googleCalendarService {
    //add ?key= to get below to work
  apiUrl: string = 'https://www.googleapis.com/calendar/v3/calendars/euivajuod3cpk9vcigr9juvo8s@group.calendar.google.com/events';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Read
  fetchEvents() {
        return this.http.get(`${this.apiUrl}`).subscribe(x=>{
            console.log(x)
        })
  }
}