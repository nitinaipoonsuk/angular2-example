import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CustomerService, CustomerModel } from '../shared';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  public provinces: string[] = ['', '1', '2', '3'];
  public customerModel: CustomerModel = new CustomerModel();

  constructor(private service: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: number;
    this.route.params.forEach((params: Params) => {
      id = +params['id'];
    });

    this.service.getById(id)
      .then(customer => {
        this.customerModel = customer;
      });
  }

 public onSubmit() {
    console.log('Hi HI update eiei');
    this.service.update(this.customerModel);

  }

}
