import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RenunganBacaPage } from '../renungan-baca/renungan-baca';
import { RenunganAudioPage } from '../renungan-audio/renungan-audio';
import { RenunganVideoPage } from '../renungan-video/renungan-video';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
  ) { }

  goRenunganBaca(){
    console.log('Menuju Renungan Baca');
    this.navCtrl.push(RenunganBacaPage);
  }

  goRenunganAudio(){
    console.log('Menuju Renungan Audio');
    this.navCtrl.push(RenunganAudioPage);
  }

  goRenunganVideo(){
    console.log('Menuju Renungan Video');
    this.navCtrl.push(RenunganVideoPage);
  }
}
