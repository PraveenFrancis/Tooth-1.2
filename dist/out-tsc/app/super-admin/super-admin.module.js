import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';
let SuperAdminModule = class SuperAdminModule {
};
SuperAdminModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            DataTablesModule,
            FormsModule,
            OwlDateTimeModule, OwlNativeDateTimeModule,
            SuperAdminRoutingModule
        ],
        declarations: [CompanyListComponent, AddCompanyComponent, AddProvidersComponent, ProvidersListComponent]
    })
], SuperAdminModule);
export { SuperAdminModule };
//# sourceMappingURL=super-admin.module.js.map