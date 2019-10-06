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
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginHttpService } from '../../services/login-http.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginHttpService) {
        this.router = router;
        this.loginHttpService = loginHttpService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initControl();
    };
    LoginComponent.prototype.handleSubmit = function () {
        var _this = this;
        if (!this.passwordControl.valid) {
            return;
        }
        this.loginHttpService.sendPassword(this.passwordControl.value)
            .subscribe(function (tokenObject) {
            console.log("\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D: " + tokenObject.token);
            _this.router.navigate(['/account']);
        });
    };
    LoginComponent.prototype.initControl = function () {
        this.passwordControl = new FormControl('', Validators.required);
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styles: [
                "\n            :host {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                flex-grow: 1;\n                height: 100%;\n                min-height: 0;\n            }\n        "
            ]
        }),
        __metadata("design:paramtypes", [Router,
            LoginHttpService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map