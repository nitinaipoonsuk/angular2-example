import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerModel, CustomerService } from '../shared';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  private customerList: CustomerModel[];

  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.service.getCustomers()
      .then(customers => {
        this.customerList = customers;
      });
  }

  onUpdate(id: number): void {
    this.router.navigate(['/customer/update', id]);
  }

  onDelete(id: number): void {
    this.service.delete(id);
  }
}
