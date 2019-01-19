import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { LoginAuthService } from '../service/login-auth.service';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  public loginuser: any = {};
  public user: User;
  interval: any;
  waringTime: string;
  endTime: string;
  showWaringAlert: boolean;
  showEndAlert: boolean;
  constructor(private authService: LoginAuthService, private userService: UserService) {
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));

  }
  ngOnInit() { 
    console.log("dataSource" + localStorage.getItem("dataSource"))
    this.interval = setInterval(() => {
      this.getUser();
    }, 100);

  }
  getUser() {
    this.userService.getUser(this.loginuser.token).subscribe(user => {
      this.user = user;
      this.endTime = this.user.endTimeOfThePausa
      this.waringTime = this.user.waring

    }, err => {
      console.log(err);
    })

  }

  alerWarnings() {
   
    if (localStorage.getItem("dataSource") == "0" && this.user.takePauseNow) {
       console.log("usao u alerWarnings")
      localStorage.setItem('dataSource', "12");
      this.showWaringAlert = true;
    }
  }


  alertEnd() {
    if (this.user.takePauseNow) { 
      //localStorage.setItem('dataSource', "1");
      this.user.takePauseNow = false;
     
    }
  }

  alertbasEnd() { 
    if (localStorage.getItem("dataSource") == "12") {
      this.showEndAlert = true; console.log("usao u alertbasEnd")
      localStorage.setItem('dataSource', "0");
    }
  }

  hideWarningAlert() {
    this.showWaringAlert = false;
  }
  hideEndAlert() {
    this.showEndAlert = false;
  }
}
