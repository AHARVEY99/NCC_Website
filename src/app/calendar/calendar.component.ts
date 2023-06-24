import { Component } from '@angular/core';
import { googleCalendarService } from '../services/googleCalendarService';
import { calendarEvent } from '../models/calendarEvent';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  calEvent: any
  constructor(private calendar: googleCalendarService){}
  ngOnInit(){
this.calendar.fetchEvents().subscribe(event =>{
  console.log(event)
  let x = JSON.parse(event)
  console.log(typeof(x.items))
  x.items.forEach((y: { description: any; }) => {
    console.log(y.description)
  });
}
);
}  
}
