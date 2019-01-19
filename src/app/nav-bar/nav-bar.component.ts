import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from '../service/login-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  title = 'Take a break';
  img="https://i.ytimg.com/vi/TLcOG8eBcFU/maxresdefault.jpg"
  public isLoging =true;
  interval: any;
 
  constructor(private router:Router,private authService: LoginAuthService) {
  
   }

  ngOnInit() { 
    this.isLoging =this.authService.checkLogin();
  }

 
  logout() {
    localStorage.removeItem('currentUser');
    this.isLoging =false;
  
    this.router.navigate(['login']);

  }
}