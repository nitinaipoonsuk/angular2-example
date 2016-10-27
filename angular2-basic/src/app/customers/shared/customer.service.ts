import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { CustomerModel } from '.';

@Injectable()
export class CustomerService {

  private webApiUrl = 'http://localhost:55419/api/customer';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private router: Router) { }

  getCustomers(): Promise<CustomerModel[]> {
    let customer = this.http.get(this.webApiUrl)
               .toPromise()
               .then(response => response.json() as CustomerModel[])
               .catch(this.handleError);

    return customer;
  }

  getCustomer(id: number): Promise<CustomerModel> {
    return this.http.get(this.webApiUrl + '/' + id)
    .toPromise()
    .then(response => response.json() as CustomerModel)
    .catch(this.handleError);
  }

  create(customerModel: CustomerModel): void {
    this.http.post(this.webApiUrl, JSON.stringify(customerModel), {headers: this.headers})
    // .map(res => res.json())
    .subscribe(
          (data) => {
            this.router.navigate(['customers']);
          },
          (response: Response) => {
            this.handleError(response);
          }
        );
  }

  update(customerModel: CustomerModel): void {
    this.http.put(this.webApiUrl + '/' + customerModel.Id, JSON.stringify(customerModel), {headers: this.headers})
    .subscribe(
          (data) => {
            this.router.navigate(['customers']);
          },
          (response: Response) => {
            this.handleError(response);
          }
        );
  }

  delete(id: number): void {
    this.http.delete(this.webApiUrl + '/' + id, {headers: this.headers})
    .subscribe(
          (data) => {
            this.router.navigate(['customers']);
          },
          (response: Response) => {
            this.handleError(response);
          }
        );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
