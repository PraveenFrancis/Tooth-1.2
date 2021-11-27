import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.loggedInStatus = JSON.parse(localStorage.getItem('isLoggedIn') || 'false');
        this.env = environment;
        this.url = this.env.apiUrl + 'Authenticate';
    }
    get isLoggedIn() {
        return JSON.parse(localStorage.getItem('isLoggedIn') || this.loggedInStatus.toString());
    }
    validateUser(loginUser) {
        return this.http.post(this.url, loginUser, {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        });
    }
};
LoginService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map