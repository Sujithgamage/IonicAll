import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

}
