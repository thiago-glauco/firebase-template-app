import { Injectable } from '@angular/core';
import {User} from '../shared/user';
import {DatabaseUser} from '../shared/database-user';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import {from, Observable, BehaviorSubject} from 'rxjs';

@Injectable()
export class UserService {

  private collectionRoot: string = 'users';
  private databaseUsersColection: AngularFirestoreCollection<DatabaseUser[]>;
  private databaseUserDoc: AngularFirestoreDocument<DatabaseUser>;
  private userObservable: Observable<DatabaseUser>;
  private databaseUserData: DatabaseUser;
  private userSubject: BehaviorSubject<DatabaseUser>;

  constructor(private afs: AngularFirestore) {
    this.databaseUsersColection = this.afs.collection<DatabaseUser>(this.collectionRoot);
  }

  userExist( userId ): Observable<any> {
    let userDoc = this.afs.doc<DatabaseUser>(`${this.collectionRoot}/${userId}`);
    userDoc.valueChanges().subscribe({
      next(data){console.log(data)},
      error(err) {console.log(err)}
    })
  }

  createUser( user: DatabaseUser ) {
    let that = this;
    let userDoc = this.afs.doc<DatabaseUser>(`${this.collectionRoot}/${user.uid}`);
    userDoc.valueChanges().subscribe({
      next(data){
        console.log(data);
        if(!data){
          that.databaseUsersColection.doc(user.uid).set(user);
        }},
      error(err) {console.log(err)}
    })
    /*this.item = this.itemDoc.valueChanges();
    this.databaseUsersColection.doc(user.uid).set(user);*/
  }

  deletUser( ) {

  }

}