import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class bibleVerseService {
  apiUrl: string = 'http://localhost:8080/verse';
  headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");
  constructor(private http: HttpClient) {}
  // Read
  fetchBibleVerse() {
        return this.http.get(`${this.apiUrl}`,{responseType: 'text'})
  }

}