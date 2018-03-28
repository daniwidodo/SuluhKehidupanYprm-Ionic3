import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';

//

@IonicPage()
@Component({
  selector: 'page-renungan-audio',
  templateUrl: 'renungan-audio.html',
})
export class RenunganAudioPage {

  posts: any;
  index: string;
  audioUrl: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _api: RestApiProvider,
    private streaming: StreamingMedia
  ) {

    //
    this.getAudioList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenunganAudioPage');
  }

  getAudioList(){
    this._api.getAudio().then(data => {this.posts = data;
      console.log(this.posts);
      });
  }

  audioParse(index) {

  }

  playAudio(index){
    
    var audioUrl = this.posts.acf.audio_url;

    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Audio played') },
      errorCallback: (e) => { console.log('Error streaming') },
      initFullscreen: true
    };


    this.streaming.playAudio(audioUrl, options);

  }

}
