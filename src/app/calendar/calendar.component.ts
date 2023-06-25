import { Component } from '@angular/core';
import { googleCalendarService } from '../services/googleCalendarService';
import { calendarEvent } from '../models/calendarEvent';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  constructor(private calendar: googleCalendarService){}
  futureCalEvent: calendarEvent[] = [];
  pastCalEvent: calendarEvent[] = [];

  ngOnInit(){
this.calendar.fetchEvents().subscribe(event =>{
  let x = JSON.parse(event)
 x.items.forEach((y: any) => {
  if(this.calendar.checkDateIsInPast(y.start.date)){
    this.futureCalEvent.push({description:y.description,summary:y.summary,startTime:y.start.date,endTime:y.end.date});
  }else{
    this.pastCalEvent.push({description:y.description,summary:y.summary,startTime:y.start.date,endTime:y.end.date});
  }
  //create function to check if date is in past and call here
 });
}
);
}  
}
