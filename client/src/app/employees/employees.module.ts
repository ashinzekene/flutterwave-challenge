import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeesPage } from './employees.page';
import { AngularRaveModule } from 'angular-rave';

@NgModule({
  imports: [
    IonicModule,
    AngularRaveModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: EmployeesPage }])
  ],
  declarations: [EmployeesPage]
})
export class EmployeesPageModule {}
