import { Injectable } from '@angular/core';
import {User} from '../shared/user';
import {DatabaseUser} from '../shared/database-user';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreDocumentRef} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';

@Injectable()
export class UserService {

  private collectionRoot: string = 'users';
  private databaseUsersDoc: AngularFirestoreDocument<DatabaseUser>;
  private userObservable: Observable<DatabaseUser>;
  private databaseUserData: DatabaseUser;

  constructor(private afs: AngularFirestore) {
    
  }

  userExist( userId ) {
    const userDoc = this.afs.doc<DatabaseUser>(`${this.collectionRoot}\${userId}`);
    return userDoc.valueChanges();
  }

  createUser( ) {

  }

  deletUser( ) {

  }

}