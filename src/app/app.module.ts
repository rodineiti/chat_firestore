import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: 'AIzaSyDalbaWpwF-XP9ipfqZiF7XbqylW7zlVD0',
  authDomain: 'firestore-b5fd9.firebaseapp.com',
  databaseURL: 'https://firestore-b5fd9.firebaseio.com',
  projectId: 'firestore-b5fd9',
  storageBucket: 'firestore-b5fd9.appspot.com',
  messagingSenderId: '273504159538'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
