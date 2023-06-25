import { Component, OnInit } from '@angular/core';
import { bibleVerseService } from '../services/bibleVerse.service';
import { googleCalendarService } from '../services/googleCalendarService';
import { calendarEvent } from '../models/calendarEvent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  futureCalEvent: calendarEvent[] = [];
  pastCalEvent: calendarEvent[] = [];
  verseOfTheDay: any;
  constructor(private bible: bibleVerseService,private calendar: googleCalendarService){}
  ngOnInit(){
this.bible.fetchBibleVerse().subscribe(verse =>{
  console.log('working')
 this.verseOfTheDay = verse
},(error) => {                              //Error callback
  this.verseOfTheDay = "My help comes from the Lord, who made heaven and earth -Psalm 121:2(ESV)"
}
);

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
