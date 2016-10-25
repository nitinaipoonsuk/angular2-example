import { Component, OnInit } from '@angular/core';

import { CustomerModel, CustomerService } from '../shared';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  private customerList: CustomerModel[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .then(customers => this.customerList = customers);
  }

}
