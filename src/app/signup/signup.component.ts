import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { LoginAuthService } from '../service/login-auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BuildFormRegister } from '../validation/BuildFormRegister';
import { User } from '../model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user: any;
  private registerForm: FormGroup;

  constructor(
    private router: Router, private userService: UserService,
    private authService: LoginAuthService,
    private buildForm: BuildFormRegister) {
    this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.registerForm= this.buildForm.build()
  }

  saveUser() {
    this.userService.saveUser(this.registerForm.value).subscribe((response) => {
      console.log(this.registerForm.value)
      if (response) {
        console.log(response);
      }
    })
    this.router.navigate(["/login"])
  }

  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get role(){
    return this.registerForm.get('role');
  }
  get password(){
    return this.registerForm.get('password')
  }
  get phoneNumber(){
    return this.registerForm.get('phoneNumber')
  }
}