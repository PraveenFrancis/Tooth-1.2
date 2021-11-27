import { __decorate } from "tslib";
import { Directive } from '@angular/core';
// Card Portlet Refresh
let cardPortletRefresh = class cardPortletRefresh {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        $(this.el.nativeElement).on('click', function (e) {
            $(this).parents('.card').addClass('card-refresh');
            setTimeout(() => {
                $(this).parents('.card').removeClass('card-refresh');
            }, 2000);
            e.preventDefault();
            e.stopPropagation();
        });
    }
};
cardPortletRefresh = __decorate([
    Directive({
        selector: '[cardPortletRefresh]'
    })
], cardPortletRefresh);
export { cardPortletRefresh };
//Card Portlet Refresh
let cardPortletDelete = class cardPortletDelete {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        $(this.el.nativeElement).on('click', function (e) {
            $(this).parents('.card').addClass('animated zoomOut');
            $(this).parents('.card').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
                $(this).parents('.card').remove();
            });
            e.preventDefault();
            e.stopPropagation();
        });
    }
};
cardPortletDelete = __decorate([
    Directive({
        selector: '[card-portlet-delete]'
    })
], cardPortletDelete);
export { cardPortletDelete };
export const Cards_Directives = [
    cardPortletRefresh,
    cardPortletDelete
];
//# sourceMappingURL=cards.directive.js.map