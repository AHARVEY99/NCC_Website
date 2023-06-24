import { Component, OnInit } from '@angular/core';
import { bibleVerseService } from './services/bibleVerse.service';
import { verseOfTheDay } from './models/bibleVerse';
import { googleCalendarService } from './services/googleCalendarService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  verseOfTheDay: any;
  constructor(private bible: bibleVerseService, private event: googleCalendarService){}
  ngOnInit(){
this.bible.fetchBibleVerse().subscribe(verse =>{
 this.verseOfTheDay = verse
});
}  
}
