import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            DashboardRoutingModule
        ],
        declarations: [DashboardComponent]
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map