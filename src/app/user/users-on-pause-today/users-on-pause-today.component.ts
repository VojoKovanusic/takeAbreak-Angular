import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../service/login-auth.service';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-users-on-pause-today',
  templateUrl: './users-on-pause-today.component.html',
  styleUrls: ['./users-on-pause-today.component.scss']
})
export class UsersOnPauseTodayComponent implements OnInit {

  
  public loginuser: any = {}; 
  public users: User [] ; 
  interval: any;
  constructor(private authService: LoginAuthService, private userService: UserService) {
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
   }

   ngOnInit() {
    this.interval = setInterval(() => {
      this.allUsersOnPauseToday();
    }, 100);
  }

   allUsersOnPauseToday() {
    this.userService.getAllUsersOnPauseToday(this.loginuser.token).subscribe(users => {
      this.users = users; 
      console.log(this.users);
    }, err => {
      console.log(err);
    })

  }
  isEmpty() {
    return this.users.length > 0

  }

}
 