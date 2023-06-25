import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { days, months } from '../models/calendarEvent';
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
    eventDate = new Date(eventDate)
    console.log(eventDate)
    const date = new Date();
    if(eventDate == undefined){
        return false   }
    if (eventDate > date){
        return true
    }
    else{
        return false
    }
  }

  formatDate(eventDate: Date){
    let dayExtension: any
    eventDate = new Date(eventDate)
    const day = days[eventDate.getDay()]
    const month = months[eventDate.getMonth()]
    const dayInMonth = eventDate.getDate()
    if (dayInMonth === 1 || dayInMonth === 21 || dayInMonth === 31){
         dayExtension = 'st'
    }
    else if (dayInMonth === 2 || dayInMonth === 22){
         dayExtension = 'nd'
    }
    else if(dayInMonth === 3 || dayInMonth === 23){
         dayExtension = 'rd'
    }
    else{
         dayExtension = 'th'
    }
    return day + " " + dayInMonth + dayExtension + " " + month
  }
}