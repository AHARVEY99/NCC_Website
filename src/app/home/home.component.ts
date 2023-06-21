import { Component, OnInit } from '@angular/core';
import { bibleVerseService } from '../services/bibleVerse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  verseOfTheDay: any;
  constructor(private bible: bibleVerseService){}
  ngOnInit(){
this.bible.fetchBibleVerse().subscribe(verse =>{
 this.verseOfTheDay = verse
},(error) => {                              //Error callback
  this.verseOfTheDay = "My help comes from the Lord, who made heaven and earth -Psalm 121:2(ESV)"
}
);
}  
}
