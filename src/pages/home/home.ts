import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RenunganBacaPage } from '../renungan-baca/renungan-baca';

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
    
  }

  goRenunganVideo(){
    
  }
}
