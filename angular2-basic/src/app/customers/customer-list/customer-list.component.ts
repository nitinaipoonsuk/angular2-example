import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerModel, CustomerService } from '../shared';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {

  public customerList: CustomerModel[];
  closeResult: string;
  constructor(private customerService: CustomerService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.getCustomers();
  }

  private getCustomers(): void {
    this.customerService.get()
      .then(customers => {
        this.customerList = customers;
      });
  }

  public onUpdate(id: number): void {
    this.router.navigate(['customer/update', id]);
  }

  public onDelete(id: number): void {
    this.customerService.delete(id);
      console.log('Hi' + id);
  }


  open(content, id) {
    let customerId = id;
    console.log(customerId);
    this.modalService.open(content, id).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
