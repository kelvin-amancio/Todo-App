import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {
  public user: any = {
    name: "",
    picture: "https://placehold.it/200"
  };

  // constructor(
  //   private afAuth: AngularFireAuth,
  // ) { }

   ngOnInit(): void {
  //   this.afAuth.user.subscribe((data) => {
  //     if (data) {
  //       this.user.name = data.displayName;
  //       this.user.picture = data.photoURL;
  //     }
  //   });
   }

  // logout() {
  //   this.afAuth.signOut();
  // }
}
