import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  friends: User[];

  constructor() { 
    let user1: User = {
      nick: 'Daniela',
      subnick: 'dani',
      age: 28,
      email: 'daniela@gmail.com',
      friend: true,
      status: 'online',
      uid: 1
    }
    let user2: User = {
      nick: 'Carlos',
      subnick: 'casm',
      age: 28,
      email: 'carlos@gmail.com',
      friend: true,
      status: 'offline',
      uid: 2
    }
    let user3: User = {
      nick: 'diana',
      subnick: 'diana',
      age: 28,
      email: 'diana@gmail.com',
      friend: false,
      status: 'busy',
      uid: 3
    }
    let user4: User = {
      nick: 'Jimmy',
      subnick: 'jimmy',
      age: 28,
      email: 'jimmy@gmail.com',
      friend: false,
      status: 'away',
      uid: 3
    }
    this.friends = [user1, user2, user3, user4];
  }

  getFriends(){
    return this.friends;
  }

}
