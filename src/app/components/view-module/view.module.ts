import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: "view/:id",
    component: ViewemployeeComponent,
  },
];
@NgModule({
  declarations: [ViewemployeeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ViewModule { }
