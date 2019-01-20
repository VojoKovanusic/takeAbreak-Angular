import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms"; 
import { CustomValidation } from "./CustomValidation ";
import { UserService } from "../service/user.service";

export class BuildFormRegister { 
  public loginuser: any = {};
  constructor() { }
    build(): FormGroup {
       return new FormGroup({

            firstName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
                CustomValidation.isFirstLetterUppercase
              ]),

              email: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.email
               
              ]),
              lastName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
                CustomValidation.isFirstLetterUppercase
              ]),
              password: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(15)
              ]),
              phoneNumber: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(15),
                CustomValidation.isNumber
              ]),
              role: new FormControl('', [
                Validators.required,
               
              ]),
        })
     
    }


}