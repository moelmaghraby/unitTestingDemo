import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'



@Injectable()
export class UsersService {
  url = "http://localhost:3000/users";
  tokensUrl = "http://localhost:3000/tokens"
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.url)
  }

  deleteUser(id){
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  updateUser(user){
    return this.http.patch(this.url,user)
  }

  createUser(user){
    return this.http.post(this.url,user)
  }

  getUserByUsername(username){
    
    let url = `${this.url}?name=${username}`
    return this.http.get(url).pipe(
      mergeMap((res: Array<any>) =>{
        if(res.length > 0){
          const user = res[0];
          const tokenUrl = `${this.tokensUrl}?userId=${user.id}`
        return this.http.get(tokenUrl).map((response:Array<any>)=>{
          let userToken = response[0].token
          return {
            userId : user.id,
            username : user.name,
            token: userToken
          }
        })
      }
      else{
        return Observable.of(null);
      }
      })
    )
  }

}
