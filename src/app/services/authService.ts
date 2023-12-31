import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from '../services/userClass';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public ngFireAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router,
    private alertCtrl: AlertController,
    private db: AngularFirestore,
  ) {}

  RegisterUser(email: string, password: string, name: string, lastName: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.db.collection('users').doc(result.user?.uid).set({
        email: email,
        name: name,
        lastName: lastName
      });
      localStorage.setItem('userData', JSON.stringify({
        email: email,
        name: name,
        lastName: lastName
      }));
    })
    .catch((error) => {
      throw error;
    });;
  }
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user) => {
      return user?.sendEmailVerification().then(() => {
      });
    });
  }

  SignIn(email: string, password: string) {
    this.ngFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        console.log(result);

        if (!result.user!.emailVerified) {
          this.displayError('Error', 'Unverified Email.');
          this.SignOut();
        } else {
          localStorage.setItem('userData', JSON.stringify(result.user));
          await this.SetUserData(result.user).then(() => {
            this.router.navigate(['tabs']);
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.displayError(
          'Error',
          'Verify that your email and password are correct.'
        );
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    console.log(user);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['']);
    });
  }

  async displayError(header: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  PasswordRecover(passwordResetEmail: string) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(async () => {
        const alert = await this.alertCtrl.create({
          header: 'Password Reset',
          message: 'An email has been sent to reset the password.',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.router.navigate(['']);
              }
            }
          ]
        });

        await alert.present();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
