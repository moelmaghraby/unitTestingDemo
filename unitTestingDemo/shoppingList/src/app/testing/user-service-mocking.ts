import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'



@Injectable()
export class UsersServiceMock {
    users: [
        {
          "id": 1,
          "name": "Maghraby"
        },
        {
          "id": 2,
          "name": "Shiref"
        },
        {
          "id": 3,
          "name": "Islam"
        },
        {
          "id": 4,
          "name": "Ramez"
        }
      ]
  constructor() { }

  getUsers(){
    return Observable.of([this.users]);
  }

  deleteUser(id){
    return Observable.of([{}])
  }

  updateUser(user){
    return Observable.of([{}])
  }

  createUser(user){
    return Observable.of([{}])
  }

  getUserByUsername(username){
    return Observable.of([{
        userId : 1,
        username : 'testUser',
        token: 'testToken'
    }])
  }

}
