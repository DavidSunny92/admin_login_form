import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PagenotfoundComponent } from 'src/app/components/pagenotfound/pagenotfound.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LogoutComponent } from './components/logout/logout.component';
import { WrongdetailsComponent } from './components/wrongdetails/wrongdetails.component';
import { CreateComponent } from './components/create/create.component';

import { UpdateemployeeComponent } from './components/updateemployee/updateemployee.component';
import {
  AuthGuard as AuthGuard
} from './auth/auth-guard.service';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginformComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'wrongdetails', component: WrongdetailsComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'employees', component: EmployeesComponent
  },
  { path: 'employees/:id', component: CreateComponent },
  
  { path: 'update/:id', component: UpdateemployeeComponent },
  
  {
    path: "employee-lazy-load",
    loadChildren: () => import('../../src/app/components/viewModule/view/view.module').then(m => m.ViewModule)

  },

  {path:"**",component:PagenotfoundComponent}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
