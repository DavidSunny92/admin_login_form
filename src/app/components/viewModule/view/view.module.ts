import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewemployeeComponent } from '../viewemployee/viewemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpViewComponent } from './emp-view/emp-view.component';



const routes: Routes = [
  {
    path: "view/:id",
    component: ViewemployeeComponent,
  },
];
@NgModule({
  declarations: [ViewemployeeComponent, EmpViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ViewModule { }
