import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserData } from '../services/userClass';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerdbService {
  loggedUser = localStorage.getItem('userData');
  constructor(
    private alertController: AlertController,
    private db: AngularFirestore,
    public router: Router
  ) {}

  updateUserData(name: string, lastName: string) {
    const userDataString = localStorage.getItem('userData');
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);

      if (userData && userData.uid) {
        return new Promise((resolve, reject) => {
          const docRef = this.db.collection('users').doc(userData.uid);
          docRef
            .update({
              displayName: name,
              lastName: lastName,
            })
            .then(() => {
              userData.displayName = name;
              userData.lastName = lastName;
              localStorage.setItem('userData', JSON.stringify(userData));

              console.log('Profile field updated correctly.');
              this.router.navigate(['tabs']);
              resolve('Profile field updated correctly.');
            })
            .catch((error) => {
              reject(error);
            });
        });
      } else {
        return console.log('The UID was not found in the user data.');
      }
    } else {
      return console.log('No user data was found in the localStorage.');
    }
  }

  getLoggedinUserData(): Promise<UserData> {
    const userDataString = localStorage.getItem('userData');

    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);

      return new Promise((resolve, reject) => {
        let dataUserSearch: UserData;

        this.db
          .collection('users')
          .doc(userData.uid)
          .get()
          .subscribe(
            (data) => {
              console.log('data before:', data);

              dataUserSearch = data.data() as UserData;
              dataUserSearch.email;
              dataUserSearch.name;
              dataUserSearch.lastName;
              resolve(dataUserSearch);
              console.log('resolve:',dataUserSearch);
            },
            (error) => {
              reject(error);
            }
          );
      });
    }

    return Promise.reject('No user data');
  }

}
