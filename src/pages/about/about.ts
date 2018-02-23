import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items;
  
  constructor(public navCtrl: NavController, public afd: AngularFireDatabase) {
    this.getDataFromFirebase();
  }
  getDataFromFirebase() {
    this.afd.list('/District/').valueChanges().subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.items = data;

      }
    )

  }

 

  addItem(name) {
    this.afd.list('/District/').push(name);

  }

  removeItem(id) {
    this.afd.list('/District/').remove(name);

  }

}
