import { Injectable } from '@angular/core';
import { from, Observable, BehaviorSubject } from 'rxjs';

interface User {
  email: string;
  verified: boolean;
}

@Injectable()
export class BoggusUserService {

  private externalData: BehaviorSubject<User> = new BehaviorSubject(null);
  private currentUser: Observable<User> = this.externalData.asObservable();

  constructor() { }

  setUser( user: User) {
    this.externalData.next(user);
  }

  getUser( ): Observable<User> {
    return this.currentUser;
  }

}