import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { LoginAuthService } from '../service/login-auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private buildForm: FormBuilder) {
    this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.registerForm= this.buildForm.group({
      id: [],
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      role: ['', Validators.required]
    });
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


}