import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  //TODO: return type. maybe a game model that has all the fields? 
  // and maybe a user model that has all the user fields? 
  public getAllGames(): Observable<any> {
    //any for now 
    //WHAT does our api return? 
    //FOR NOW, it will be boring lol 
    // will need to break up the base url, secret api key, and the input 
    //maybe there's a service that will get the steam id in any way ... 


    return this.http.get<any>(environment.url, {headers: environment.headers})
    
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {

      console.log('an error occured: ', httpError.error.message);

    } else {
      console.log(`
      Backend returned code ${httpError.status}
      body was: ${httpError.error};
      `)
    }

    return throwError(() => new Error('Something really bad happened'));
  }
}
