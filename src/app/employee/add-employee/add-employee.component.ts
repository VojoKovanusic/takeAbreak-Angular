import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/Employee';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
   
  constructor( private employeeService: EmployeeService ) { }

  ngOnInit() {
  }
  processFormOnSubmit(){ 
      return this.employeeService.addEmployee(this.employeeService.form.value)
  
  }

}