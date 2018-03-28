import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { RenunganBacaPageModule } from '../pages/renungan-baca/renungan-baca.module';
import { RenunganAudioPageModule } from '../pages/renungan-audio/renungan-audio.module';
import { RenunganBacaDetailsPageModule } from '../pages/renungan-baca-details/renungan-baca-details.module';
import { RenunganVideoPageModule } from '../pages/renungan-video/renungan-video.module';
import { HttpClientModule } from '@angular/common/http';

import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    RenunganBacaPageModule,
    RenunganAudioPageModule,
    RenunganBacaDetailsPageModule,
    RenunganVideoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider,
    StreamingMedia
  ]
})
export class AppModule {}
