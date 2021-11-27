import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let PlanAddComponent = class PlanAddComponent {
    constructor(_formBuilder, route, toastrService, router, adminService) {
        this._formBuilder = _formBuilder;
        this.route = route;
        this.toastrService = toastrService;
        this.router = router;
        this.adminService = adminService;
        this.show = false;
        this.hide = false;
        this.PatientList = [];
        this.patient = { PatientID: 0, Name: '', Email: '', Phone: '', Gender: '', Notes: '' };
        this.id = parseInt(this.route.snapshot.paramMap.get('PatientID'), 10);
        this.planadd = { PlanID: 0, PatientID: this.id, PatientName: '', PlanName: '' };
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['']
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['']
        });
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
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        if (this.id != 0) {
            this.adminService.getByID('getPatientByID', this.id).subscribe(data => {
                if (data.length != 0) {
                    this.hide = true;
                }
                this.firstFormGroup.patchValue({
                    firstCtrl: data[0].Name
                });
            }, (err) => {
                console.log(err);
            });
        }
    }
    searchPatient(searchTerm) {
        if (searchTerm.length > 3) {
            this.adminService.searchPatient('searchPatient', searchTerm).subscribe(data => {
                this.id = data[0].PatientID;
                if (data.length != 0) {
                    this.hide = true;
                }
                this.firstFormGroup.patchValue({
                    firstCtrl: data[0].Name
                });
            }, (err) => {
                console.log(err);
            });
        }
    }
    createPlan() {
        const planData = { PatientID: this.id, PatientName: this.firstFormGroup.value.firstCtrl, PlanName: this.secondFormGroup.value.secondCtrl };
        this.adminService.savePlan(planData).subscribe(data => {
            const retuenID = JSON.parse(JSON.stringify(data)).insertId;
            this.router.navigate(['pages/plan-detail' + '/' + retuenID]);
        }, (err) => {
            console.log(err);
        });
    }
    savePatient() {
        this.adminService.savePatient(this.patient).subscribe(data => {
            console.log(data.insertId);
            this.adminService.getByID('getPatientByID', data.insertId).subscribe(data => {
                this.id = data[0].PatientID;
                this.hide = true;
                this.firstFormGroup.patchValue({
                    firstCtrl: data[0].Name
                });
            }, (err) => {
                console.log(err);
            });
            this.showSuccess('Patient Add Successfully', 'Patient Added');
        });
    }
    showSuccess(display, Message) {
        this.toastrService.success(display, Message);
    }
    showFailure(error, Message) {
        this.toastrService.error(error, Message);
    }
};
PlanAddComponent = __decorate([
    Component({
        selector: 'app-plan-add',
        templateUrl: './plan-add.component.html',
        styleUrls: ['./plan-add.component.css']
    })
], PlanAddComponent);
export { PlanAddComponent };
//# sourceMappingURL=plan-add.component.js.map