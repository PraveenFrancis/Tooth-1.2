import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanAddComponent } from './plan-add/plan-add.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
const routes = [
    { path: 'patient/:PatientID', component: PatientComponent },
    { path: 'plan-list', component: PlanListComponent },
    { path: 'plan/:PatientID', component: PlanAddComponent },
    { path: 'plan-detail/:PatientID', component: PlanDetailsComponent }
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PagesRoutingModule);
export { PagesRoutingModule };
//# sourceMappingURL=pages-routing.module.js.map