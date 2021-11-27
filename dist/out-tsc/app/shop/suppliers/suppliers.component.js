import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
let SuppliersComponent = class SuppliersComponent {
    constructor() {
        this.dtOptions = {};
        this.dtTrigger = new Subject();
    }
    ngOnInit() {
    }
};
SuppliersComponent = __decorate([
    Component({
        selector: 'app-suppliers',
        templateUrl: './suppliers.component.html',
        styleUrls: ['./suppliers.component.css']
    }),
    __metadata("design:paramtypes", [])
], SuppliersComponent);
export { SuppliersComponent };
//# sourceMappingURL=suppliers.component.js.map