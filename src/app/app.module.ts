import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/page-components/loginform/loginform.component';
import { PagenotfoundComponent } from './components/page-components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/page-components/header/header.component';
import { DataService } from './services/data.service';
import { CreateComponent } from './components/page-components/create/create.component';
import { UpdateemployeeComponent } from './components/page-components/updateemployee/updateemployee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    PagenotfoundComponent,
    HomeComponent,
    EmployeesComponent,
    HeaderComponent,
     CreateComponent,
    UpdateemployeeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
