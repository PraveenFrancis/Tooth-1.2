import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
let AppComponent = class AppComponent {
    constructor() {
        this.env = environment;
    }
    ngOnInit() {
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map