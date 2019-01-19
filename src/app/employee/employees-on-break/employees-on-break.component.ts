import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employees-on-break',
  templateUrl: './employees-on-break.component.html',
  styleUrls: ['./employees-on-break.component.scss']
})
export class EmployeesOnBreakComponent implements OnInit {
  interval: any;
  private employees: Employee[];
  private numberEmployees: Number;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.getEmployeesOnBreak();
    }, 500);
  }

  getEmployeesOnBreak() {
    this.employeeService.getEmployeesOnBreak().subscribe(data => {
      this.employees = data;
      this.numberEmployees = this.employees.length
    })
  }

  isEmpty() {
    return this.numberEmployees > 0

  }
}
