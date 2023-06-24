import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class googleCalendarService {
    //add ?key= to get below to work
  apiUrl: string = 'http://localhost:8080/calendarEvents';
//   headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Read
  fetchEvents() {
        return this.http.get(`${this.apiUrl}`,{responseType: 'text'})
  }
}