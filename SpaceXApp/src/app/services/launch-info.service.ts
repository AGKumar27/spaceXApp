import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class LaunchInfoService {

  constructor(private http: HttpClient) {}

  getAllLunches() {
    return this.http
      .get(`https://api.spacexdata.com/v3/launches?limit=100`)
      .pipe(catchError(this.handleError));
  }
  getAllLunchByFilter(Launch, Land, Year) {
    return this.http
      .get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${Launch}&land_success=${Land}&launch_year=${Year}`
      )
      .pipe(catchError(this.handleError));
  }
  getAllLunchByYear(Year) {
    return this.http
      .get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${Year}`
      )
      .pipe(catchError(this.handleError));
  }

  getAllSuccessfulLaunch(launchSuccessFlag) {
    return this.http
      .get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchSuccessFlag}`
      )
      .pipe(catchError(this.handleError));
  }

  getAllSuccessfulLand(landSuccessFlag) {
    return this.http
      .get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${landSuccessFlag}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again later.');
  }
}
