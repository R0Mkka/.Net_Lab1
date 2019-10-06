import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DEFAULT_HEADERS } from '../constants';
import { ITokenObject } from '../models';

@Injectable({
    providedIn: 'root'
})
export class LoginHttpService {
    constructor(
        private readonly http: HttpClient,
    ) {}

    public sendPassword(password: string): Observable<ITokenObject> {
        return this.http.post<ITokenObject>('/login', JSON.stringify({ password }), { headers: DEFAULT_HEADERS });
    }
}