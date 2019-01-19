import { FormGroup, FormControl, Validators } from "@angular/forms"; 

export class BuildFormRegister { 

    build(): FormGroup {
       return new FormGroup({

            firstName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)
              ]),

              email: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.email
              ]),
              lastName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)
              ]),
              password: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(15)
              ]),
              phoneNumber: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(15)
              ]),
              role: new FormControl('', [
                Validators.required,
               
              ]),
        })
     
    }
}