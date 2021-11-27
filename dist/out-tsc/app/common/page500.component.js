import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
let Page500Component = class Page500Component {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle('Relinksys | 500');
    }
    ngOnInit() {
    }
};
Page500Component = __decorate([
    Component({
        selector: 'app-page500',
        templateUrl: './page500.component.html',
        styleUrls: ['./page500.component.css']
    }),
    __metadata("design:paramtypes", [Title])
], Page500Component);
export { Page500Component };
//# sourceMappingURL=page500.component.js.map