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
  apiUrl: string = 'https://beta.ourmanna.com/api/v1/get';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Read
  fetchBibleVerse() {
        return this.http.get(`${this.apiUrl}`,{responseType: 'text'})

  }
  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}