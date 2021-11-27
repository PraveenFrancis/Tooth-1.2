import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
let PlanListComponent = class PlanListComponent {
    constructor(adminService, toastrService, route, router) {
        this.adminService = adminService;
        this.toastrService = toastrService;
        this.route = route;
        this.router = router;
        this.planList = [];
        this.length = 0;
    }
    ngOnInit() {
        this.adminService.getList('getPlanList').subscribe(data => {
            this.length = data.length;
            this.planList = data;
        }, (err) => {
            console.log(err);
        });
    }
    createPlan(data) {
        this.router.navigate(['pages/plan-detail' + '/' + data.PatientID]);
    }
    alertPlan(data) {
        this.alertCopyData = { PatientID: data.PatientID, PatientName: data.PatientName, PlanName: data.PlanName };
    }
    copyPlan() {
        // const planData = {PatientID: data.PatientID , PatientName: data.PatientName , PlanName: data.PlanName };
        this.adminService.savePlanCopy(this.alertCopyData).subscribe(data => {
            this.showSuccess('Plan Duplicate Successfully', 'Plan Duplicate');
            this.adminService.getList('getPlanList').subscribe(data => {
                this.planList = data;
            }, (err) => {
                console.log(err);
            });
        }, (err) => {
            console.log(err);
        });
    }
    alertDeletePlan(id) {
        this.alertDeletePlanID = id;
    }
    deletePlan() {
        this.adminService.deletePatient('deletePlan', this.alertDeletePlanID).subscribe(data => {
            this.showFailure('Plan delete Successfully', 'Plan delete');
            this.adminService.getList('getPlanList').subscribe(data => {
                this.planList = data;
            }, (err) => {
                console.log(err);
            });
        }, (err) => {
            console.log(err);
        });
    }
    showSuccess(display, Message) {
        this.toastrService.success(display, Message);
    }
    showFailure(error, Message) {
        this.toastrService.error(error, Message);
    }
};
PlanListComponent = __decorate([
    Component({
        selector: 'app-plan-list',
        templateUrl: './plan-list.component.html',
        styleUrls: ['./plan-list.component.css']
    }),
    __metadata("design:paramtypes", [AdminService,
        ToastrService, ActivatedRoute,
        Router])
], PlanListComponent);
export { PlanListComponent };
//# sourceMappingURL=plan-list.component.js.map