var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DEFAULT_HEADERS } from '../constants';
var AccountHttpService = /** @class */ (function () {
    function AccountHttpService(http) {
        this.http = http;
    }
    AccountHttpService.prototype.getBooks = function () {
        return this.http.get('/books', { headers: DEFAULT_HEADERS });
    };
    AccountHttpService.prototype.addBook = function (book) {
        return this.http.post('/books', JSON.stringify(book), { headers: DEFAULT_HEADERS });
    };
    AccountHttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AccountHttpService);
    return AccountHttpService;
}());
export { AccountHttpService };
//# sourceMappingURL=account-http.service.js.map