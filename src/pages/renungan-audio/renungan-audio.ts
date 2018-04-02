import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';


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
        public _api: RestApiProvider
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
          console.log(audioId)
      }




}


