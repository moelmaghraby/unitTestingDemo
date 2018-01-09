import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import { AuthServiceMock } from '../../testing/auth-service-mock';
let authService:AuthService;
let Authguard:AuthGuardService;
let routerService:Router;
describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService,
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
        {
          provide:AuthService,
          useClass:AuthServiceMock
        }]
    });
  });

  beforeEach(inject(
    [AuthService,AuthGuardService,Router],(auth,guard,router)=>{
      authService = auth;
      Authguard=guard;
      routerService = router;
      }))

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));

  it('should navigate to login when the user is not logged in',()=>{
    authService.currentUser = undefined;
    let result = Authguard.canActivate(null,null);
    expect(result).toBeFalsy();
    expect(routerService.navigate).toHaveBeenCalledWith(['/login'])

  })

  it('should return true when a user is logged in ',()=>{
    authService.currentUser = {userId : 1, username:'testUser',token:'testToken'};
    let result = Authguard.canActivate(null,null);
    expect(result).toBeTruthy();
  })
});
