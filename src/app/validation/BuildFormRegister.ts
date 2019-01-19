import { FormGroup, FormControl, Validators } from "@angular/forms"; 

export class BuildFormRegister {
    private form: FormGroup
   

    build(): FormGroup {
        this.form = new FormGroup({

            firstName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)
              ]),

              email: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
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
              captcha: new FormControl()
        })
        return this.form;
    }
}