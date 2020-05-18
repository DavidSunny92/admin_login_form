import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { WrongdetailsComponent } from './components/wrongdetails/wrongdetails.component';
import { DataService } from './services/data.service';
import { CreateComponent } from './components/create/create.component';
import { UpdateemployeeComponent } from './components/updateemployee/updateemployee.component';
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
    FooterComponent,
    LogoutComponent,
    WrongdetailsComponent,
    CreateComponent,
    UpdateemployeeComponent,

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
  providers: [UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
