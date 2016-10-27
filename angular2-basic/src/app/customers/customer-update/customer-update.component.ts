import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CustomerModel, CustomerService } from '../shared';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {
  public customerModel: CustomerModel = new CustomerModel();
  public provinces: string[] = ['', '1', '2', '3'];

  constructor(private route: ActivatedRoute, private service: CustomerService) {
   }

  ngOnInit() {
      this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getCustomer(id)
      .then(customer => {
        this.customerModel = customer;
      });
   });
  }

  onSubmit() {
    this.service.update(this.customerModel);
  }

}
