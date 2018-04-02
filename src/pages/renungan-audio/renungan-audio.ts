import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';


@IonicPage()
@Component({
    selector: 'page-renungan-audio',
    templateUrl: 'renungan-audio.html',
})

export class RenunganAudioPage{

    //
    posts : any;


    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public _api: RestApiProvider,
        private streaming: StreamingMedia
      ) {
      }


      ionViewDidLoad() {
        console.log('Audio Page Loaded !!!');
      }

      ngOnInit(){
          this.getAudioList();
      }

      getAudioList(){
          this._api.getAudio().then(data => {this.posts = data;
            console.log(this.posts)
        });
      }

      playAudio(audioId: string){

          let options: StreamingAudioOptions = {
              successCallback: () => {console.log('Audio Played !!!')},
              errorCallback: () => {console.log('Error sedang terjadi!!') },
              initFullscreen: true
          };

          let _audioId = audioId;

          this.streaming.playAudio(_audioId, options);

          console.log(_audioId)
      }




}


