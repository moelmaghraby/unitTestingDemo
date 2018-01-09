import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  error :string = ''
  currentUser;
  constructor(private userService:UsersService) { }

  login(username){
    return this.userService.getUserByUsername(username).map(res =>{
      if(!res){
        this.error = "User Not Found";
        return;
      }

      this.currentUser = res;


    })
  }

  logout(){
    this.currentUser = null
  }
  



}
