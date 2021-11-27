import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserComponent = class UserComponent {
    constructor(adminService, route, router) {
        this.adminService = adminService;
        this.route = route;
        this.router = router;
        this.user = {
            StaffID: null,
            StaffName: null,
            MobileNo: null,
            AlternateNo: null,
            Address: null,
            State: null,
            City: null,
            Email: null,
            AadharCardNo: null,
            PANCardNo: null,
            Incentive: null,
            Remark: null,
            Salary: null,
            LoginName: null,
            LoginPassword: null,
            JoinDate: null,
            TerminationDate: null,
            Status: null,
            CreatedBy: null,
            CreatedOn: null,
            UpdatedBy: null,
            UpdatedOn: null,
        };
        this.staffid = parseInt(this.route.snapshot.paramMap.get('StaffID'), 10);
    }
    ngOnInit() {
        if (this.staffid !== 0) {
            this.adminService.getDataById(this.staffid, 'getStaffListByID').subscribe(data => {
                this.user = data[0];
            }, (err) => {
                console.log(err);
                // this.showFailure(err, 'Error Loading Accommodation Data.');
            });
        }
    }
    saveUser() {
        this.adminService.saveData(this.user, 'saveStaff').subscribe(data => {
            // this.showSuccess('Accomodation Updated Successfully', 'Accomodation Added');
            // this.router.navigate(['/pages/accomodation-list']);
        }, (err) => {
            console.log(err);
            // this.showFailure(err, 'Data not Saved');
        });
    }
};
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map