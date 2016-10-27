import { Component, OnInit } from '@angular/core';

import { CustomerService, CustomerModel } from '../shared';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  public clickMe: string;
  public values: string;

  public provinces: string[] = ['', '1', '2', '3'];
  public customerModel: CustomerModel = new CustomerModel();

  // private mockedCustomerModel: CustomerModel[] = MockedCustomerModel;

  constructor(private service: CustomerService) { }

  ngOnInit() {
  }

  public onClickMe() {
    this.clickMe = 'clickMe';
  }

  public onKey(event: any) {
    console.log(event);
    this.values += event.target.value + ' | ';
  }

  public onSubmit() {
    // this.customerModel.Id = this.mockedCustomerModel.length + 1;
    // this.mockedCustomerModel.push(this.customerModel);
    this.service.create(this.customerModel);
  }

}
