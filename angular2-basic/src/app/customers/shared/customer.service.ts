import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { CustomerModel } from '.';

@Injectable()
export class CustomerService {

  private webApiUrl = 'http://localhost:55419/api/customer';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private router: Router) { }

  public get(): Promise<CustomerModel[]> {
    let customers = this.http.get(this.webApiUrl)
      .toPromise()
      .then(response => response.json() as CustomerModel[])
      .catch(this.handleError);
    return customers;
  }

  public getById(id: number): Promise<CustomerModel> {
    return this.http.get(this.webApiUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as CustomerModel)
      .catch(this.handleError);
  }

  public create(model: CustomerModel): void {
    this.http.post(this.webApiUrl, JSON.stringify(model), { headers: this.headers })
      .subscribe(
      (data) => {
        this.router.navigate(['customers']);
      },
      (response: Response) => {
        this.handleError(response);
      }
      );
  }

  public update(model: CustomerModel): void {
     this.http
      .put(this.webApiUrl + '/' + model.Id, JSON.stringify(model), { headers: this.headers })
      .subscribe(
        (data) => {
          this.router.navigate(['customers']);
        },
        (response: Response) => {
          this.handleError(response);
        }
      );
  }

  public delete(id: number): void {
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
