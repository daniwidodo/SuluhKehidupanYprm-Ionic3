import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-renungan-baca-details',
  templateUrl: 'renungan-baca-details.html',
})
export class RenunganBacaDetailsPage {

  //
  post: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {

    //
    this.post = this.navParams.get('post');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenunganBacaDetailsPage');
  }

  bagiRenungan(){
    
  }

}
