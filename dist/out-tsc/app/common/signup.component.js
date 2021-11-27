import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
let SignupComponent = class SignupComponent {
    constructor(adminService, loginService, toastrService, router) {
        this.adminService = adminService;
        this.loginService = loginService;
        this.toastrService = toastrService;
        this.router = router;
        this.user = { UserID: 0, Name: '', Email: '', Password: '' };
        this.loginUser = { userEmail: '', userPassword: '' };
    }
    ngOnInit() {
        (function ($) {
            "use strict";
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
    userRegister() {
        this.adminService.userRegister(this.user).subscribe(data => {
            this.showSuccess(data[0].Email, 'has been Registerd in successfully');
            this.loginUser.userEmail = data[0].Email;
            this.loginUser.userPassword = data[0].Password;
            if (data[0]) {
                this.loginService.validateUser(this.loginUser)
                    .subscribe((data1) => {
                    if (data1[0]) {
                        localStorage.setItem('LoggedINUser', JSON.stringify(data1[0]));
                        window.localStorage.setItem('isLoggedIn', 'true');
                        this.showSuccess(data1[0].Email, 'has been logged in successfully');
                        this.router.navigate(['/dashboard']);
                    }
                });
            }
        });
    }
    showSuccess(display, Message) {
        this.toastrService.success(display, Message);
    }
    showFailure(error, Message) {
        this.toastrService.error(error, Message);
    }
};
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css']
    }),
    __metadata("design:paramtypes", [AdminService, LoginService,
        ToastrService, Router])
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map