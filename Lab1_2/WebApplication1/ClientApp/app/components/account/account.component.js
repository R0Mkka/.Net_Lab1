var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountHttpService } from '../../services/account-http.service';
var AccountComponent = /** @class */ (function () {
    function AccountComponent(accountHttpService) {
        this.accountHttpService = accountHttpService;
        this.books$ = new BehaviorSubject([]);
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.initBooks();
    };
    Object.defineProperty(AccountComponent.prototype, "booksStream", {
        get: function () {
            return this.books$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AccountComponent.prototype.initBooks = function () {
        var _this = this;
        this.accountHttpService.getBooks()
            .subscribe(function (books) { return _this.books$.next(books); });
    };
    AccountComponent = __decorate([
        Component({
            selector: 'app-account',
            templateUrl: './account.component.html',
            styles: [
                "\n            :host {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                flex-grow: 1;\n                height: 100%;\n                min-height: 0;\n            }\n        "
            ]
        }),
        __metadata("design:paramtypes", [AccountHttpService])
    ], AccountComponent);
    return AccountComponent;
}());
export { AccountComponent };
//# sourceMappingURL=account.component.js.map