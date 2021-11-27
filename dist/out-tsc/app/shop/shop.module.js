import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ShopRoutingModule } from './shop-routing.module';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AngularMaterialModule } from '../material-module';
let ShopModule = class ShopModule {
};
ShopModule = __decorate([
    NgModule({
        imports: [
            CommonModule, FormsModule, ReactiveFormsModule,
            DataTablesModule, OwlDateTimeModule, OwlNativeDateTimeModule,
            ShopRoutingModule,
            AngularMaterialModule
        ],
        declarations: [CustomerAddComponent, SuppliersComponent]
    })
], ShopModule);
export { ShopModule };
//# sourceMappingURL=shop.module.js.map