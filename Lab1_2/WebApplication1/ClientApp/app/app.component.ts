import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [`
        body {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #eeeeee;
    }

    * {
        box-sizing: border-box;
    }
    `],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }