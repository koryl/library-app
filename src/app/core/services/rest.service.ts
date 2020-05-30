import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export abstract class RestService {

    private baseUri: string;

    protected constructor(private http: HttpClient) {
        this.baseUri = 'http://localhost:8090';
    }

    private static handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }

    get<T>(path: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.get<T>(this.baseUri + path, options)
            .pipe(
                catchError(RestService.handleError)
            );
    }

    post<T>(url: string, body: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.post<T>(this.baseUri, body, options)
            .pipe(
                catchError(RestService.handleError)
            );
    }
}
