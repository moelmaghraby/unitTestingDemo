import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UserShoppingItemsComponent } from './user-shopping-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingItemsService } from '../../shared/shopping-items/shopping-items.service';
import { AuthService } from '../../shared/auth-service/auth.service';
import { ShoppingItemsServiceMock } from '../../testing/shopping-service-mock';
import { CurrencyPipePipe } from '../../shared/currency-pipe/currency-pipe.pipe';


fdescribe('UserShoppingItemsComponent', () => {
  let component: UserShoppingItemsComponent;
  let fixture: ComponentFixture<UserShoppingItemsComponent>;
  let shoppingService:ShoppingItemsService;
  let authService:AuthService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShoppingItemsComponent , CurrencyPipePipe ],
      imports:[ReactiveFormsModule,FormsModule],
      providers:[{
          provide:ShoppingItemsService,
          useClass:ShoppingItemsServiceMock
      },
    {
        provide:AuthService,

    }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject(
    [ShoppingItemsService,AuthService],(shopping:ShoppingItemsService,auth)=>{
      
      shoppingService = shopping;
      authService = auth 
      }))

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call log data on startup',()=>{
    fixture = TestBed.createComponent(UserShoppingItemsComponent);
    component = fixture.componentInstance;
    let logSpy = spyOn(component,'logData');
    fixture.detectChanges();
    expect(logSpy).toHaveBeenCalled();
  })
});
