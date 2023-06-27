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

  calculateTime(startTime: Date, endTime: Date){
    startTime = new Date(startTime)
    endTime = new Date(endTime)
    const startTimeHours = startTime.getHours()
    var startTimeMinutes = startTime.getMinutes()
    const endTimeHours = endTime.getHours()
    var endTimeMinutes = endTime.getMinutes()
    if(startTimeMinutes == 0){
       var formatStartTime =  startTimeHours + ':' + startTimeMinutes + '0'
    }
    else{
        formatStartTime =  startTimeHours + ':' + startTimeMinutes
    }

    if(endTimeMinutes == 0){
        var formatEndTime =  endTimeHours + ':' + endTimeMinutes + '0'
    }
    else{
        formatEndTime =  endTimeHours + ':' + endTimeMinutes
    }
    return formatStartTime + '-' + formatEndTime
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