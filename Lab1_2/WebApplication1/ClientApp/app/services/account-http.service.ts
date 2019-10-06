import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DEFAULT_HEADERS } from '../constants';
import { IBook } from '../models';

@Injectable({
    providedIn: 'root'
})
export class AccountHttpService {
    constructor(
        private readonly http: HttpClient,
    ) { }

    public getBooks(): Observable<IBook[]> {
        return this.http.get<IBook[]>('/books', { headers: DEFAULT_HEADERS });
    }

    public addBook(book: IBook): Observable<IBook> {
        return this.http.post<IBook>('/books', JSON.stringify(book), { headers: DEFAULT_HEADERS });
    }
}
