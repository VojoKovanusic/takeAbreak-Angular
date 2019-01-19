import { Injectable } from '@angular/core';
import { Employee } from "../model/Employee";

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



 
  baseUrl = "http://localhost:8090/empoloyee"

  employees: Employee[]
  employee: Employee
  constructor(private router:Router,private htpp: HttpClient) { }
 
    form = new FormGroup({
    firistName: new FormControl(''),
    email: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    takeAbreakToday: new FormControl(''),
    created: new FormControl('')

  })

  takeBreak(employee: Employee) {
    return this.htpp.put(this.baseUrl + "/take/break", employee) 
     
  }  

  getter(){
    return this.employee;
  }
 setter(employee: Employee)  {
    this.employee=employee;
  }
  getEmployees(): Observable<Employee[]> {
    return this.htpp.get<Employee[]>(this.baseUrl + "s");
  }
  getEmployeesOnBreak():  Observable<Employee[]> {
    return this.htpp.get<Employee[]>(this.baseUrl + "s/on/break")
  }

  addEmployee(employee: Employee) {
    return this.htpp.post(this.baseUrl, employee).subscribe(()=>
    this.router.navigate(["/employees"]));
  }
  updateEmployee(employee: Employee) {
    return this.htpp.put(this.baseUrl, employee)
  }
  deleteEmployee(employer: Employee) {
    let idEmployer=employer.employeeId
    return this.htpp.delete(this.baseUrl + "/" + idEmployer)
  }
  getEmployeeById(idEmployer: number): Observable<Employee> {
    return this.htpp.get<Employee>(this.baseUrl + "/" + idEmployer)
  }


  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async sleep() {
    console.log("Trenutno: " + new Date().toString());
    // Sleep thread for 3 seconds
    await this.delay(3000);
    console.log("Nakon pet sekundi " + new Date().toString());
  }



 



}