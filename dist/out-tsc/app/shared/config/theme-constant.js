import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ThemeConstants = class ThemeConstants {
    constructor() {
        this.colorConfig = {
            colors: {
                primary: '#7774e7',
                info: '#0f9aee',
                success: '#37c936',
                warning: '#ffcc00',
                danger: '#ff3c7e',
                primaryInverse: 'rgba(119, 116, 231, 0.1)',
                infoInverse: 'rgba(15, 154, 238, 0.1)',
                successInverse: 'rgba(55, 201, 54, 0.1)',
                warningInverse: 'rgba(255, 204, 0, 0.1)',
                dangerInverse: 'rgba(255, 60, 126, 0.1)',
                gray: '#ebeef6',
                white: '#ffffff',
                dark: '#515365',
            }
        };
    }
    get() {
        return this.colorConfig;
    }
};
ThemeConstants = __decorate([
    Injectable()
], ThemeConstants);
export { ThemeConstants };
//# sourceMappingURL=theme-constant.js.map