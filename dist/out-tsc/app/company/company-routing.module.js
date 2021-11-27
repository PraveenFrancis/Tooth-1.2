import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { ShopAddComponent } from './shop-add/shop-add.component';
import { ShopListComponent } from './shop-list/shop-list.component';
const routes = [
    { path: 'user/:StaffID', component: UserComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'add-shop', component: ShopAddComponent },
    { path: 'shop-list', component: ShopListComponent }
];
let CompanyRoutingModule = class CompanyRoutingModule {
};
CompanyRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], CompanyRoutingModule);
export { CompanyRoutingModule };
//# sourceMappingURL=company-routing.module.js.map