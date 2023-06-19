import { Component } from '@angular/core';
import { bibleVerseService } from '../services/bibleVerse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  verseOfTheDay: any;
  constructor(private bible: bibleVerseService){}
  ngOnInit(){
this.bible.showTasks().subscribe(verse =>{
 this.verseOfTheDay = verse
});
}  

}
