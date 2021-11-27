import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators/';
import { environment } from '../../environments/environment';
let AdminService = class AdminService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.env = environment;
        this.url = this.env.apiUrl + 'AdminApi';
    }
    saveData(data, mode) {
        console.log(data);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', mode);
        return this.httpClient.post(this.url, data, { headers, params })
            .pipe(catchError(this.handleError));
    }
    userRegister(data) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'userRegister');
        return this.httpClient.post(this.url, data, { headers, params })
            .pipe(catchError(this.handleError));
    }
    savePatient(data) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'savePatient');
        return this.httpClient.post(this.url, data, { headers, params })
            .pipe(catchError(this.handleError));
    }
    //  teeth diagnose save
    saveTeethDiagnose(body, condition, selectedTeeth, PatientID) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('PatientID', PatientID).set('mode', condition).set('selectedTeeth', selectedTeeth);
        return this.httpClient.post(this.url, body, { headers, params })
            .pipe(catchError(this.handleError));
    }
    saveTeethDiagnosePerioBone(body, condition, selectedTeeth, PatientID) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('PatientID', PatientID).set('mode', condition).set('selectedTeeth', selectedTeeth);
        return this.httpClient.post(this.url, body, { headers, params })
            .pipe(catchError(this.handleError));
    }
    saveTeethDiagnoseEndodontics(body, condition, selectedTeeth, PatientID) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('PatientID', PatientID).set('mode', condition).set('selectedTeeth', selectedTeeth);
        return this.httpClient.post(this.url, body, { headers, params })
            .pipe(catchError(this.handleError));
    }
    saveTeethDiagnoseMissingTeethImplants(body, condition, selectedTeeth, PatientID) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('PatientID', PatientID).set('mode', condition).set('selectedTeeth', selectedTeeth);
        return this.httpClient.post(this.url, body, { headers, params })
            .pipe(catchError(this.handleError));
    }
    getDiagnosisByPatientID(id, mode, tblName) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('id', id).set('mode', mode).set('tblName', tblName);
        return this.httpClient.get(this.url, { headers, params })
            .pipe(catchError(this.handleError));
    }
    pl_form(bodydata) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('mode', 'pl_form');
        return this.httpClient.post(this.url, bodydata, { headers, params })
            .pipe(catchError(this.handleError));
    }
    // end
    updatePatientName(data) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('loggedOnUser', this.loggedInUser).set('mode', 'updatePatientName');
        return this.httpClient.post(this.url, data, { headers, params })
            .pipe(catchError(this.handleError));
    }
    getDataById(id, mode) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('id', id)
            .set('mode', mode);
        return this.httpClient.get(this.url, { headers, params })
            .pipe(catchError(this.handleError));
    }
    getList(mode) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('mode', mode);
        return this.httpClient.get(this.url, { headers, params })
            .pipe(catchError(this.handleError));
    }
    deletePatient(mode, id) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('mode', mode).set('id', id);
        return this.httpClient.delete(this.url, { headers, params })
            .pipe(catchError(this.handleError));
    }
    getByID(mode, id) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('mode', mode).set('id', id);
        return this.httpClient.get(this.url, { headers, params })
            .pipe(catchError(this.handleError));
    }
    searchPatient(mode, searchTerm) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('mode', mode).set('searchTerm', searchTerm);
        return this.httpClient.get(this.url, { headers, params })
            .pipe(catchError(this.handleError));
    }
    savePlan(data) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('mode', 'savePlan');
        return this.httpClient.post(this.url, data, { headers, params })
            .pipe(catchError(this.handleError));
    }
    savePlanCopy(data) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = new HttpParams().set('mode', 'savePlanCopy');
        return this.httpClient.post(this.url, data, { headers, params })
            .pipe(catchError(this.handleError));
    }
    handleError(errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error: ', errorResponse);
        }
        return throwError('"Server Not Connected"');
    }
};
AdminService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map