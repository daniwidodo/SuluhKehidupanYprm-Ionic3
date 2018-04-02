import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-renungan-video',
  templateUrl: 'renungan-video.html',
})
export class RenunganVideoPage {

  posts: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _api: RestApiProvider
  ) {

    //
    this.getVideoList()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenunganVideoPage');
  }

  getVideoList(){
    this._api.getVideo().then(data => {this.posts = data;
      console.log(this.posts);
      });
  }

}
