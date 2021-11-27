import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
let Page404Component = class Page404Component {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle('Relinksys | 404');
    }
    ngOnInit() {
    }
};
Page404Component = __decorate([
    Component({
        selector: 'app-page404',
        templateUrl: './page404.component.html',
        styleUrls: ['./page404.component.css']
    }),
    __metadata("design:paramtypes", [Title])
], Page404Component);
export { Page404Component };
//# sourceMappingURL=page404.component.js.map