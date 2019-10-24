import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    carType: new FormControl('', Validators.required),
    carModel: new FormControl(''),
    carYear: new FormControl(''),
    carColor: new FormControl(''),
    carFuel: new FormControl(''),
    carImage: new FormControl('')
  });

  getCustomers() {
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer) {
    this.customerList.push({
      carType: customer.carType,
      carModel: customer.carModel,
      carYear: customer.carYear,
      carColor: customer.carColor,
      carFuel: customer.carFuel,
      carImage: customer.carImage
    });
  }
  populateForm(customer) {
    this.form.setValue(customer);
  }

  updateCustomer(customer) {
    this.customerList.update(customer.$key, {
      carType: customer.carType,
      carModel: customer.carModel,
      carYear: customer.carYear,
      carColor: customer.carColor,
      carFuel: customer.carFuel,
      carImage: customer.carImage
    });
  }
  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }
}
