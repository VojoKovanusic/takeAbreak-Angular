import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../service/login-auth.service';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  employeesOnpause:number=0;
  
  progress:number;
  public loginuser: any = {}; 
  public users: User [] ; 
  constructor(private authService: LoginAuthService, private userService: UserService) {
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.userService.getAllUsers(this.loginuser.token).subscribe(users => {
      this.users = users; 
      this.getNumberEmployeesOnPause();
 this.progress=this.employeesOnpause/this.users.length*100;
 console.log(this.progress)
    }, err => {
      console.log(err);
    })

  }
 
getNumberEmployeesOnPause(){
  this.users.forEach(u=>{
    if(u.takePauseToday){
    this.employeesOnpause=this.employeesOnpause+1}     
    console.log("this.employeesOnpause"+this.employeesOnpause)
  });

}

}
 
 
