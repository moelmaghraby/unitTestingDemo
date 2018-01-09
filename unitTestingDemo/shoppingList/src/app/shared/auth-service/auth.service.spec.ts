import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UsersServiceMock } from '../../testing/user-service-mocking';
import { Observable } from 'rxjs/Observable';
let service :AuthService;
let userService:UsersService;
describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService,
        {provide:UsersService,useClass:UsersServiceMock}]
    });
  });

  beforeEach(inject(
    [UsersService,AuthService],(users:UsersService,auth)=>{
      userService = users;
      service = auth
      }))

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should set current user when a user is returned from the api',()=>{
    let userSpy = spyOn(userService,'getUserByUsername').and.callFake((username)=>{
      return Observable.of({userId:1,username:'testUser',token:'testToken'});
    })

    service.login('Maghraby').subscribe(()=>{})
    expect(userSpy).toHaveBeenCalledWith('Maghraby');
    expect(service.currentUser.userId).toEqual(1);
    expect(service.currentUser.username).toEqual('testUser');
    expect(service.currentUser.token).toEqual('testToken');
  })

  it('should reset Current user object on auth service',()=>{
    service.currentUser = {userId:1,username:'testUser',token:'testToken'};

    service.logout();

    expect(service.currentUser).toBeFalsy();
  })
});
