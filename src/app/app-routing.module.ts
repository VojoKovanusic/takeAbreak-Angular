import { Routes, RouterModule } from "@angular/router";
import { AddEmployeeComponent } from "./employee/add-employee/add-employee.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { AuthGuard } from "./auth/AuthGuard";
import { EmployeesOnBreakComponent } from "./employee/employees-on-break/employees-on-break.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { UsersListComponent } from "./user/users-list/users-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserOnPauseComponent } from "./user/user-on-pause/user-on-pause.component";
import { UsersOnPauseTodayComponent } from "./user/users-on-pause-today/users-on-pause-today.component";
import { NgModule } from "@angular/core";
import { StopwatchComponent } from "./stopwatch/stopwatch.component";

const routes: Routes = [ {
  path: 'add/employee',
  component: AddEmployeeComponent,
},
{
  path: '',
  component: HomePageComponent,
},
{
  path: 'employees',
  component: EmployeeListComponent, canActivate: [AuthGuard]
} ,
{
  path: 'employee/on/break',
  component: EmployeesOnBreakComponent, canActivate: [AuthGuard]
}  
,
{
  path: 'login',
  component: LoginComponent,
}  ,
{
  path: 'signup',
  component: SignupComponent,
}  ,
{
  path: 'users',
  component: UsersListComponent, canActivate: [AuthGuard]
}   ,
{
  path: 'user',
  component: UserDetailComponent, canActivate: [AuthGuard]
}    ,
{
  path: 'user/on/pause',
  component: UserOnPauseComponent, canActivate: [AuthGuard]
}    ,
{
  path: 'user/on/pause/today',
  component: UsersOnPauseTodayComponent, canActivate: [AuthGuard]
}    ,
{
  path: 'stopwatch',
  component: StopwatchComponent, canActivate: [AuthGuard]
}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
