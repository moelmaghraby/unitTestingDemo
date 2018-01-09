import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ShoppingItemsComponent } from './shopping-items.component';
import { Router } from '@angular/router';
import { UserShoppingItemsMockComponent } from '../testing/user-shopping-items.component.mock';
import { ShoppingSummaryMockComponent } from '../testing/summary-shopping-items.component.mock';


describe('ShoppingItemsComponent', () => {
  let component: ShoppingItemsComponent;
  let fixture: ComponentFixture<ShoppingItemsComponent>;
  let routerService:Router

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingItemsComponent,UserShoppingItemsMockComponent,ShoppingSummaryMockComponent ],
      providers:[{
        provide: Router,
        useClass: class { navigate = jasmine.createSpy('navigate'); }
      }]
    })
    .compileComponents();
  }));

  beforeEach(inject(
    [Router],(router)=>{
      
      routerService = router;
      }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the users Section when calling the goToUsers function',()=>{
    component.goToUsers();
    expect(routerService.navigate).toHaveBeenCalledWith(['/Users'])
  })
});
