import { TestBed, inject } from '@angular/core/testing';

import { SummaryService } from './summary.service';
import { ShoppingItemsService } from '../shopping-items/shopping-items.service';
import { ShoppingItemsServiceMock } from '../../testing/shopping-service-mock';
import { UsersService } from '../users/users.service';
import { UsersServiceMock } from '../../testing/user-service-mocking';
let userService:UsersService;
let shoppingService:ShoppingItemsService;
let service:SummaryService;
fdescribe('SummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummaryService,
        {provide:ShoppingItemsService,useClass:ShoppingItemsServiceMock},
      {provide:UsersService,useClass:UsersServiceMock}]
    });
  });

  beforeEach(inject(
    [ShoppingItemsService,UsersService,SummaryService],(shopping:ShoppingItemsService,users:UsersService,summary)=>{
      userService = users;
      shoppingService = shopping;
      service = summary
      }))
  

  it('should be created', inject([SummaryService], (service: SummaryService) => {
    expect(service).toBeTruthy();
  }));
  it('should calculate the shopping summary correctly',()=>{
    service.getShoppingSummary().subscribe(res =>{
      let toBuyObj = res.find(el => el.status =='toBuy');
      let bought = res.find(el => el.status == 'Bought');
      //Values based on Data inside mocks
      expect(toBuyObj.cost).toEqual(2700);
      expect(bought.cost).toEqual(500);
    })
  })
});
