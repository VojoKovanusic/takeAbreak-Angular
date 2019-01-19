import { Component, OnInit } from '@angular/core'; 
import { LoginAuthService } from '../../service/login-auth.service';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User';
 

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public loginuser: any = {}; 
  public user: User ;
  interval: any;
  constructor(private authService: LoginAuthService, private userService: UserService) {
  
    this.authService.isLoggedIn();

    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
   }
 ngOnInit() { 
      this.interval = setInterval(() => { 
        this.getUser(); 
    }, 100); 
  
    }
   getUser() { 
    this.userService.getUser(this.loginuser.token).subscribe(user => {
      this.user = user; 
    }, err => {
      console.log(err);
    })
   
  }
  takeBreak(){ 
    this.userService.takePause( this.user,this.loginuser.token).subscribe(user => {
    }, err => {
      console.log(err);
    })

  }
}
 