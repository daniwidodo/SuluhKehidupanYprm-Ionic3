import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

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
    public _api: RestApiProvider,
    private _youtube: YoutubeVideoPlayer
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenunganVideoPage');
  }

  ngOnInit(){
    //
    this.getVideoList();
  }

  getVideoList(){
    this._api.getVideo().then(data => {this.posts = data;
      console.log(this.posts);
      });
  }

  playYoutubeVideo(YTurl: string){

    let youtubeId = YTurl;
    this._youtube.openVideo(youtubeId);
    console.log(youtubeId)
  }

}
