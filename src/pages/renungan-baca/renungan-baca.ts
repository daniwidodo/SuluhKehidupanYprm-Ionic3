import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { RenunganBacaDetailsPage } from '../renungan-baca-details/renungan-baca-details';


@IonicPage()
@Component({
  selector: 'page-renungan-baca',
  templateUrl: 'renungan-baca.html',
})
export class RenunganBacaPage {

  //
  posts : any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _api: RestApiProvider
  ) {

    //
    this.getPostList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenunganBacaPage');
  }

  //
  getPostList(){
    this._api.getPosts().then(data => {this.posts = data;
    console.log(this.posts);
    })
  }

  goRenunganBacaDetails(){
    this.navCtrl.push(RenunganBacaDetailsPage)
  }

}
