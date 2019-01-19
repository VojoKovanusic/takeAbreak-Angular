import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Employee } from "../model/Employee";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customersArray = [];
  customers:Employee[] = [];
  showDeleteMessage:boolean;
  searchText: string = "";
 
 
  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      list => {
        this.customersArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
         }
        
         
        
        )
       }
    );
  }
  deleteCustomer($key) {
    if (confirm("Are you shure to delete this record?")) {
      this.customerService.deleteCustomer($key)
      this.showDeleteMessage = true;
      setTimeout(()=>this.showDeleteMessage=false,3000)
    }
  }

  filterCondition(customer) {
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
