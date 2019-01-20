import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"; 
 
 



export class CustomValidation   {
 

    static canotContainSpace(control: AbstractControl): ValidationErrors | null {
        let value = (control.value as string);
        if (/ /.test(value)) {
            return { canotContainSpace: true };
        }
        return null;
    }
    
    static isFirstLetterUppercase(control: AbstractControl): ValidationErrors | null {
        let value = (control.value as string);
        if (/^[A-Z]/.test(value)) {
            return null;
        }
        return { isFirstLetterUppercase: true };
    }

    static isNumber(control: AbstractControl): ValidationErrors | null {
        if (!isNaN(parseFloat(control.value)) && isFinite(control.value))
            return null;
        return { isNumber: true }
    }

 
 
 
    static isMailExist(control: AbstractControl): ValidationErrors | null {
  
    
        if(control.value !=="wbs.vojo@gmail.com")
            return null;
        return { isMailExist: true }
    }


}