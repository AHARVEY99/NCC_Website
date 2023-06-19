import { Component, OnInit } from '@angular/core';
import { bibleVerseService } from './services/bibleVerse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  verseOfTheDay: any;
  constructor(private bible: bibleVerseService){}
  ngOnInit(){
this.bible.showTasks().subscribe(verse =>{
 this.verseOfTheDay = verse
});
}  
}
