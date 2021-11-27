import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let UserListComponent = class UserListComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.show = false;
        this.PatientList = [];
        this.patient = { PatientID: 0, Name: '', Email: '', Phone: '', Gender: '', Notes: '' };
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
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
};
UserListComponent = __decorate([
    Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.css']
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map