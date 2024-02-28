import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CardComponent, ButtonComponent]
})
export class LoginComponent implements OnInit {

  // constructor(private afAuth: AngularFireAuth){}

  ngOnInit(): void {
  }



  login() {
    // this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
