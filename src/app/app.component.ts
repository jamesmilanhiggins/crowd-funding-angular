import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})

export class AppComponent {

  user: Observable<firebase.User>;
  title = 'Greenlight Crowdfunding!';

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(email, password) {
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
