import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../material-module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PagesRoutingModule } from './pages-routing.module';
import { PatientComponent } from './patient/patient.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanAddComponent } from './plan-add/plan-add.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [PatientComponent, PlanListComponent, PlanAddComponent, PlanDetailsComponent, PlanComponent]
})
export class PagesModule { }
