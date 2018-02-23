import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomerPage } from '../customer/customer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  load() {
    this.navCtrl.push(CustomerPage, {
      val:'sujith' 
    })
  }

}
