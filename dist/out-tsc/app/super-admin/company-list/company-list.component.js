import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
let CompanyListComponent = class CompanyListComponent {
    constructor(adminService, toastrService) {
        this.adminService = adminService;
        this.toastrService = toastrService;
        this.dtOptions = {};
        this.dtTrigger = new Subject();
        this.show = false;
        this.patient = { PatientID: 0, Name: '', Email: '', Phone: '', Gender: '', Notes: '' };
    }
    ngOnInit() {
        (function ($) {
            "use strict";
            $('.input2').each(function () {
                $(this).on('blur', function () {
                    if ($(this).val().trim() != "") {
                        $(this).addClass('has-val');
                    }
                    else {
                        $(this).removeClass('has-val');
                    }
                });
            });
        })(jQuery);
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            colReorder: true,
            dom: 'Bfrtip',
            buttons: [
                'colvis',
                'copy',
                'print',
                'excel',
                'csv',
                'pdf'
            ],
            select: true,
            responsive: true,
            retrieve: true,
        };
        this.patientList();
    }
    showScreen() {
        if (this.show === false) {
            this.show = true;
        }
        else {
            this.show = false;
        }
    }
    savePatient() {
        console.log(this.patient);
        this.adminService.savePatient(this.patient).subscribe(data => {
            console.log(data);
            this.showSuccess('User Add Successfully', 'User Added');
        });
    }
    patientList() {
        this.adminService.getList('getPatientList').subscribe(data => {
            console.log(data, 'company data');
        }, (err) => {
            console.log(err);
            // this.showFailure(err, 'Data not Saved');
        });
    }
    showSuccess(display, Message) {
        this.toastrService.success(display, Message);
    }
    showFailure(error, Message) {
        this.toastrService.error(error, Message);
    }
};
CompanyListComponent = __decorate([
    Component({
        selector: 'app-company-list',
        templateUrl: './company-list.component.html',
        styleUrls: ['./company-list.component.css']
    })
], CompanyListComponent);
export { CompanyListComponent };
//# sourceMappingURL=company-list.component.js.map