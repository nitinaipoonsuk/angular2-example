import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CustomerModel, MockedCustomerModel } from '.';

@Injectable()
export class CustomerService {

  private webApiUrl = 'http://localhost:55419/api/customer';
  
  constructor(private http: Http) { }

  getCustomers() : Promise<CustomerModel[]> {
    var customer = this.http.get(this.webApiUrl)
               .toPromise()
               .then(response => response.json().data as CustomerModel[])
               .catch(this.handleError);

    return customer;

    //return MockedCustomerModel;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
