import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
let CommonLayoutComponent = class CommonLayoutComponent {
    constructor(_router, _route) {
        this._router = _router;
        this._route = _route;
        this.app = {
            layout: {
                sidePanelOpen: false,
                isMenuOpened: true,
                isMenuCollapsed: true,
                themeConfigOpen: false,
                rtlActived: false,
                searchActived: false
            }
        };
        this.headerThemes = ['header-default', 'header-primary', 'header-info', 'header-success', 'header-danger', 'header-dark'];
        this.changeHeader = changeHeader;
        function changeHeader(headerTheme) {
            this.headerSelected = headerTheme;
        }
        this.sidenavThemes = ['sidenav-default', 'side-nav-dark'];
        this.changeSidenav = changeSidenav;
        function changeSidenav(sidenavTheme) {
            this.sidenavSelected = sidenavTheme;
        }
    }
    ngOnInit() {
        this.LoggedOnUser = JSON.parse(localStorage.getItem('LoggedINUser'));
        this.headerSelected = 'header-primary';
        this.app.layout.isMenuCollapsed = false;
    }
    logout() {
        localStorage.clear();
        this._router.navigate(['/']);
    }
};
CommonLayoutComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './common-layout.component.html',
        styleUrls: ['./common-layout.component.css']
    }),
    __metadata("design:paramtypes", [Router, ActivatedRoute])
], CommonLayoutComponent);
export { CommonLayoutComponent };
//# sourceMappingURL=common-layout.component.js.map