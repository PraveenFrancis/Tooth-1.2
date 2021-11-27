import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
const routes = [
    { path: 'customer-add', component: CustomerAddComponent },
    { path: 'suppliers', component: SuppliersComponent }
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ShopRoutingModule);
export { ShopRoutingModule };
//# sourceMappingURL=shop-routing.module.js.map