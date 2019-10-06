import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginHttpService } from '../../services/login-http.service';

import { ITokenObject } from '../../models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
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
export class LoginComponent implements OnInit {
    public passwordControl: FormControl;

    constructor(
        private readonly router: Router,
        private readonly loginHttpService: LoginHttpService,
    ) { }

    public ngOnInit(): void {
        this.initControl();
    }

    public handleSubmit(): void {
        if (!this.passwordControl.valid) {
            return;
        }

        this.loginHttpService.sendPassword(this.passwordControl.value)
            .subscribe((tokenObject: ITokenObject) => {
                console.log(`Полученный токен: ${tokenObject.token}`);

                this.router.navigate(['/account']);
            });
    }

    private initControl(): void {
        this.passwordControl = new FormControl('', Validators.required);
    }
}
