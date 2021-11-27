import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { environment } from '../environments/environment';
function getWindow() {
    return window;
}
let OpenLinkInNewWindowDirective = class OpenLinkInNewWindowDirective {
    constructor(el) {
        this.el = el;
        this.env = environment;
    }
    onMouseEnter() {
        getWindow().open('#' + this.link || '');
    }
};
__decorate([
    Input('routerLink'),
    __metadata("design:type", String)
], OpenLinkInNewWindowDirective.prototype, "link", void 0);
__decorate([
    HostListener('mousedown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpenLinkInNewWindowDirective.prototype, "onMouseEnter", null);
OpenLinkInNewWindowDirective = __decorate([
    Directive({ selector: '[olinw007]' }),
    __metadata("design:paramtypes", [ElementRef])
], OpenLinkInNewWindowDirective);
export { OpenLinkInNewWindowDirective };
//# sourceMappingURL=olinw.directive.js.map