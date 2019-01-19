import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { LoginAuthService } from '../service/login-auth.service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: any = {};
  public loginuser: any = {};  
  constructor(private userService: UserService, private router: Router, private authService: LoginAuthService) {
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    
  }

  loginUser(user: any) {
    this.userService.loginUser(user).subscribe((response) => {
      if(response){
        if(response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          if(response.user.role === 'ADMIN'){
            this.router.navigate(['/users']);
          }else{
            this.router.navigate(['/user']);
          }
        }
      }
    })
  }

}
