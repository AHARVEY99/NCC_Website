import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { map } from 'rxjs';
import { calendarEvent } from '../models/calendarEvent';
@Injectable({
  providedIn: 'root',
})
export class googleCalendarService {
  apiUrl: string = 'http://localhost:8080/calendarEvents';
  constructor(private http: HttpClient) {}
  fetchEvents() {
        return this.http.get(`${this.apiUrl}`,{responseType: 'text'})
  }

  checkDateIsInPast(eventDate: Date) {
    const date = new Date();
    console.log(date)
    if(eventDate == undefined){
        return false   }
    if (eventDate < date){
        return true
    }
    else{
        return false
    }
  }
}