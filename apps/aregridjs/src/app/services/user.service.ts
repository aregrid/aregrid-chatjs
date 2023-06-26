import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';

export interface User {
  avatar: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>({
    avatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
    name: 'Chi Zhang',
  });

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  setUser(user: User): void {
    this.userSubject.next(user);
  }

  getUserAvatar(): Observable<string> {
    return this.userSubject.pipe(map((user) => user.avatar));
  }

  setUserAvatar(avatar: string): void {
    this.userSubject.pipe(take(1)).subscribe((user) => {
      const updatedUser = { ...user, avatar };
      this.userSubject.next(updatedUser);
    });
  }

  getUserName(): Observable<string> {
    return this.userSubject.pipe(map((user) => user.name));
  }

  setUserName(name: string): void {
    this.userSubject.pipe(take(1)).subscribe((user) => {
      const updatedUser = { ...user, name };
      this.userSubject.next(updatedUser);
    });
  }
}
