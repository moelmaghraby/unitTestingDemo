import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import{HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
let httpMock:HttpTestingController;
let service:UsersService;
const url = "http://localhost:3000/users";
const tokensUrl = "http://localhost:3000/tokens"
describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
      imports:[HttpClientTestingModule]
    });
  });

  beforeEach(inject(
    [HttpTestingController,UsersService],(http: HttpTestingController,usersService:UsersService)=>{
      httpMock = http;
      service = usersService;
      }))

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should call the users and tokens apis to get the user and the user\'s token',()=>{
    const usersUrl = `${url}?name=Maghraby`;
    const userTokenUrl = `${tokensUrl}?userId=1`;
    const mockUserData = {
      id:1,
      name:'Maghraby',
    }
    const mockTokenData = {
      userId:1,
      token:'TestToken'
    }
    service.getUserByUsername('Maghraby').subscribe(res=>{
      expect(res.userId).toEqual(mockUserData.id);
      expect(res.username).toEqual(mockUserData.name);
      expect(res.token).toEqual(mockTokenData.token);
    })
    const mockUsersReq = httpMock.expectOne(usersUrl);
    mockUsersReq.flush([mockUserData]);
    const mocktokenReq = httpMock.expectOne(userTokenUrl);
    mocktokenReq.flush([mockTokenData]);
    httpMock.verify();
  })

  it('should not call the tokens api to when returning an empty response from users api',()=>{
    const usersUrl = `${url}?name=Maghraby`;
    const userTokenUrl = `${tokensUrl}?userId=1`;
    const mockUserData = {
      id:1,
      name:'Maghraby',
    }
    const mockTokenData = {
      userId:1,
      token:'TestToken'
    }
    service.getUserByUsername('Maghraby').subscribe(res=>{
      expect(res).toBeFalsy();
    })
    const mockUsersReq = httpMock.expectOne(usersUrl);
    mockUsersReq.flush([]);
    const mocktokenReq = httpMock.expectNone(userTokenUrl);
    httpMock.verify();
  })


});
