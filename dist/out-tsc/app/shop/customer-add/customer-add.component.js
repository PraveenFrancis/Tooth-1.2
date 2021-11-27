import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
let CustomerAddComponent = class CustomerAddComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
};
CustomerAddComponent = __decorate([
    Component({
        selector: 'app-customer-add',
        templateUrl: './customer-add.component.html',
        styleUrls: ['./customer-add.component.css']
    }),
    __metadata("design:paramtypes", [FormBuilder])
], CustomerAddComponent);
export { CustomerAddComponent };
//# sourceMappingURL=customer-add.component.js.map