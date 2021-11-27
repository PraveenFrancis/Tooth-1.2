import { __decorate } from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
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
    Input('routerLink')
], OpenLinkInNewWindowDirective.prototype, "link", void 0);
__decorate([
    HostListener('mousedown')
], OpenLinkInNewWindowDirective.prototype, "onMouseEnter", null);
OpenLinkInNewWindowDirective = __decorate([
    Directive({ selector: '[olinw007]' })
], OpenLinkInNewWindowDirective);
export { OpenLinkInNewWindowDirective };
//# sourceMappingURL=olinw.directive.js.map