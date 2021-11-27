import { __decorate } from "tslib";
import { Directive, HostListener } from '@angular/core';
//sidebar toggler
let sidebarToggler = class sidebarToggler {
    constructor() { }
    toggleOpen($event) {
        $event.preventDefault();
        document.querySelector('.app').classList.toggle('is-collapsed');
    }
};
__decorate([
    HostListener('click', ['$event'])
], sidebarToggler.prototype, "toggleOpen", null);
sidebarToggler = __decorate([
    Directive({
        selector: '[sidebarToggler]'
    })
], sidebarToggler);
export { sidebarToggler };
//sidebar dropdown
let sidebarDropdown = class sidebarDropdown {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        $('.side-nav .side-nav-menu li a').click(function (event) {
            if ($(this).parent().hasClass('open')) {
                $(this).parent().children('.dropdown-menu').slideUp(200, function () {
                    $(this).parent().removeClass('open');
                });
            }
            else {
                $(this).parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
                $(this).parent().parent().children('li.open').children('a').removeClass('open');
                $(this).parent().parent().children('li.open').removeClass('open');
                $(this).parent().children('.dropdown-menu').slideDown(200, function () {
                    $(this).parent().addClass('open');
                });
            }
        });
    }
};
sidebarDropdown = __decorate([
    Directive({
        selector: '[sideBar]'
    })
], sidebarDropdown);
export { sidebarDropdown };
export const Sidebar_Directives = [
    sidebarDropdown,
    sidebarToggler
];
//# sourceMappingURL=side-nav.directive.js.map