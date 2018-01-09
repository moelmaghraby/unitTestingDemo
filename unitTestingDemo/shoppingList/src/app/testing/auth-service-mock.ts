import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthServiceMock {
  error :string = ''
  currentUser;
  constructor( ) { }

  login(username){
    return Observable.of({});
  }

  logout(){
    
  }
  



}
