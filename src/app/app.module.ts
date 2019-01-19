import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CustomerService } from './shared/customer.service';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/employee.service'; 
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

import { RouterModule } from '@angular/router'; 
import { TakeBreakComponent } from './employee/take-break/take-break.component';
import { EmployeesOnBreakComponent } from './employee/employees-on-break/employees-on-break.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'; 
import { LoginAuthService } from './service/login-auth.service';
import { UserService } from './service/user.service';
import { AuthGuard } from './auth/AuthGuard';
import { UsersListComponent } from './user/users-list/users-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserOnPauseComponent } from './user/user-on-pause/user-on-pause.component';
import { CommonModule } from '@angular/common';
 import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersOnPauseTodayComponent } from './user/users-on-pause-today/users-on-pause-today.component';
import {ProgressBarModule} from "angular-progress-bar"
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { BuildFormRegister } from './validation/BuildFormRegister';

@NgModule({
  declarations: [
    AppComponent, 
    HomePageComponent, 
    CustomerComponent,
    CustomerListComponent, 
    EmployeeListComponent, 
    AddEmployeeComponent, TakeBreakComponent,
     EmployeesOnBreakComponent, SignupComponent, 
     LoginComponent, UsersListComponent, 
     UserDetailComponent, UserOnPauseComponent, 
     UsersOnPauseTodayComponent, NavBarComponent, StopwatchComponent
  ],
  imports: [   
    CountdownTimerModule.forRoot(),
    ProgressBarModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule
    
  ],
  providers: [BuildFormRegister,CustomerService,EmployeeService,UserService,LoginAuthService,AuthGuard],
  bootstrap: [AppComponent] 
})
export class AppModule { }
