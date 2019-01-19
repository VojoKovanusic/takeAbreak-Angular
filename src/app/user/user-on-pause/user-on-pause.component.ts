import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../service/login-auth.service';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User'; 
@Component({
  selector: 'app-user-on-pause',
  templateUrl: './user-on-pause.component.html',
  styleUrls: ['./user-on-pause.component.scss']
})

 

export class UserOnPauseComponent implements OnInit  {

  public loginuser: any = {}; 
  public users: User [] ; 
  interval: any;
  constructor(private authService: LoginAuthService, private userService: UserService) {
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
   }

   ngOnInit() {
    this.interval = setInterval(() => {
      this.AllUsersOnPauseNow();
    }, 100);
  }

   AllUsersOnPauseNow() {
    this.userService.getAllUsersOnPauseNow(this.loginuser.token).subscribe(users => {
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
 