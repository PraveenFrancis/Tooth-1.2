import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddCompanyComponent = class AddCompanyComponent {
    constructor(adminService, route, router) {
        this.adminService = adminService;
        this.route = route;
        this.router = router;
        this.company = {
            CompanyID: null,
            CompanyName: null,
            Address: null,
            Country: null,
            State: null,
            City: null,
            MobileNo: null,
            AlternateNo: null,
            Email: null,
            Website: null,
            GSTNO: null,
            CINNO: null,
            Logo: null,
            ShopTimingFrom: null,
            ShopTimingTo: null,
            ClosedOn: null,
            WelcomeNote: null,
            Status: null,
            CreatedBy: null,
            CreatedOn: null,
            UpdatedBy: null,
            UpdatedOn: null
        };
        this.companyid = parseInt(this.route.snapshot.paramMap.get('CompanyID'), 10);
    }
    ngOnInit() {
        if (this.companyid !== 0) {
            this.adminService.getDataById(this.companyid, 'getCompanyListByID').subscribe(data => {
                this.company = data[0];
                console.log(data[0], 'id data');
            }, (err) => {
                console.log(err);
                // this.showFailure(err, 'Error Loading Accommodation Data.');
            });
        }
    }
    saveCompany() {
        this.adminService.saveData(this.company, 'saveCompany').subscribe(data => {
            // this.showSuccess('Accomodation Updated Successfully', 'Accomodation Added');
            // this.router.navigate(['/pages/accomodation-list']);
        }, (err) => {
            console.log(err);
            // this.showFailure(err, 'Data not Saved');
        });
    }
};
AddCompanyComponent = __decorate([
    Component({
        selector: 'app-add-company',
        templateUrl: './add-company.component.html',
        styleUrls: ['./add-company.component.css']
    })
], AddCompanyComponent);
export { AddCompanyComponent };
//# sourceMappingURL=add-company.component.js.map