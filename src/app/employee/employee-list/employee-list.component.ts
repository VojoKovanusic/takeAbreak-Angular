import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/Employee';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  private employees: Employee[];
  interval: any;
  public loginuser: any = {};
  public user: any = {};
  constructor(private router: Router, private employeeService: EmployeeService, private userService: UserService) { }

  ngOnInit() {
    this.getUser()
    this.interval = setInterval(() => { 
      this.getEmployeesk(); 
  }, 500); 

  }

  getUser(){
       this.user=localStorage.getItem('token') 
  console.log(this.user)
     
  }
  getEmployeesk(): any {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    })
  }

  deleteEmployee(product) {
    if (confirm("Are you shure to delete this record?")) {
      this.employeeService.deleteEmployee(product).subscribe(data => {
        this.employees.splice(this.employees.indexOf(product), 1);
      }, (error) => console.log(error));

    }
  }

  takeBreak(product) {
    this.employeeService.takeBreak(product).subscribe();
    this.router.navigate(["/employee/on/break"]);
  }
}
