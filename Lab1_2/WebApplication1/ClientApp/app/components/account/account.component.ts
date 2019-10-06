import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AccountHttpService } from '../../services/account-http.service';

import { IBook } from '../../models';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-grow: 1;
                height: 100%;
                min-height: 0;
            }
        `
    ]
})
export class AccountComponent implements OnInit {
    private books$: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);

    constructor(
        private readonly accountHttpService: AccountHttpService,
    ) {}

    public ngOnInit(): void {
        this.initBooks();
    }

    public get booksStream(): Observable<IBook[]> {
        return this.books$.asObservable();
    }

    private initBooks(): void {
        this.accountHttpService.getBooks()
            .subscribe((books: IBook[]) => this.books$.next(books));
    }
}