import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { User } from '../models/user';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
let LoginComponent = class LoginComponent {
    constructor(titleService, router, loginService, route, spinner, translate, toastrService) {
        this.titleService = titleService;
        this.router = router;
        this.loginService = loginService;
        this.route = route;
        this.spinner = spinner;
        this.translate = translate;
        this.toastrService = toastrService;
        this.loginUser = { userEmail: '', userPassword: '' };
        this.titleService.setTitle('MakeMeClear | Login');
    }
    ngOnInit() {
        (function ($) {
            'use strict';
            $('.input2').each(function () {
                $(this).on('blur', function () {
                    if ($(this).val().trim() != "") {
                        $(this).addClass('has-val');
                    }
                    else {
                        $(this).removeClass('has-val');
                    }
                });
            });
        })(jQuery);
    }
    login() {
        console.log(this.loginUser, 'loginuser data');
    }
    validateUser() {
        this.loginService.validateUser(this.loginUser)
            .subscribe((data) => {
            if (data[0]) {
                localStorage.setItem('LoggedINUser', JSON.stringify(data[0]));
                window.localStorage.setItem('isLoggedIn', 'true');
                this.showSuccess(data[0].Email, 'has been logged in successfully', data[0].Email, 'Login');
                console.log(data);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.showFailure('Username or Password mismatch.', 'Login failed');
            }
        }, (err) => {
            console.log(err);
            this.showFailure(err, 'Login failed. Please contact Administrator');
            this.router.navigate(['/']);
        });
    }
    showSuccess(user, display, role, Message) {
        display = user + ' ' + display;
        Message = role + ' ' + Message;
        this.toastrService.success(display, Message);
    }
    showFailure(error, Message) {
        this.toastrService.error(error, Message);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [Title,
        Router,
        LoginService,
        ActivatedRoute,
        NgxSpinnerService,
        TranslateService,
        ToastrService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map