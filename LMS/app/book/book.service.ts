import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { IBook } from '../models/book';

@Injectable()

export class BookService {

    constructor(private _http: Http) { }

    // Add or Modify a book

    save(book: IBook) {

        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(book);

        this._http.post('/api/Book/Save', body, options).toPromise().catch(this.handleError);
        //this._http.post('/api/Book/Save', body, options).map((res: Response) => JsonHttpHelper.json(res))
        //    .catch(this.handleError);
    }

    private handleError(error: Response) {
        throw new Error("Wrong");
    }
}