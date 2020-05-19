import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PagenotfoundComponent } from 'src/app/components/page-components/pagenotfound/pagenotfound.component';
import { LoginformComponent } from './components/page-components/loginform/loginform.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CreateComponent } from './components/page-components/create/create.component';
import { UpdateemployeeComponent } from './components/page-components/updateemployee/updateemployee.component';
import { AuthGuard as AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginformComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:id', component: CreateComponent }, 
  { path: 'update/:id', component: UpdateemployeeComponent },
  {  path: "employee-lazy-load",
    loadChildren: () => import('./components/view-module/view.module').then(m => m.ViewModule) },
  {path:"**",component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
