import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import { AuthServiceMock } from '../../testing/auth-service-mock';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerService:Router;
  let authService:AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ LoginComponent ],
      providers:[ {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy('navigate'); }
      },
      {
        provide:AuthService,
        useClass:AuthServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(inject(
    [AuthService,Router],(auth,router)=>{
      authService = auth;
      routerService = router;
      }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the not found error',()=>{
    component.userName = 'Maghraby';
    let authSpy = spyOn(authService,'login').and.callFake((username)=>{
      return Observable.of(null);
    })

    component.login();
    expect(authSpy).toHaveBeenCalledWith('Maghraby');
    expect(component.showNotFound).toBeTruthy();
  })

  it('should Navigate the user to the root directory',()=>{
    component.userName = 'Maghraby';
    let authSpy = spyOn(authService,'login').and.callFake((username)=>{
      return Observable.of({userId:1,username:'Maghraby',token:'testToken'});
    })
    authService.currentUser = {userId:1,username:'Maghraby',token:'testToken'};

    component.login();

    expect(authSpy).toHaveBeenCalledWith('Maghraby');
    expect(routerService.navigate).toHaveBeenCalledWith(['/']);
    expect(component.showNotFound).toBeFalsy();

  })

});
