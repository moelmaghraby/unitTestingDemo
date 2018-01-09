import { TestBed, inject } from '@angular/core/testing';

import { ShoppingItemsService } from './shopping-items.service';
import{HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

fdescribe('ShoppingItemsService', () => {
  let httpMock:HttpTestingController
  let service:ShoppingItemsService;
  let url = "http://localhost:3000/shoppingItems";
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingItemsService],
      imports:[HttpClientTestingModule]
    });
  });

  beforeEach(inject(
    [HttpTestingController,ShoppingItemsService],(http: HttpTestingController,shoppingService:ShoppingItemsService)=>{
      httpMock = http;
      service = shoppingService;
      }))

  it('should be created', inject([ShoppingItemsService], (service: ShoppingItemsService) => {
    expect(service).toBeTruthy();
  }));

  it('should call get request to get all users',()=>{
    const mockData = [
      {
        "id": 6,
        "userId": 2,
        "description": "Buy A New Sofa",
        "price": 500,
        "status": "toBuy"
      },
      {
        "id": 7,
        "userId": 2,
        "description": "Buy a new 50 inch LCD",
        "price": 2000,
        "status": "toBuy"
      },
      {
        "id": 8,
        "userId": 2,
        "description": "Buy Paint Buckets",
        "price": 500,
        "status": "Bought"
      },
      {
        "id": 9,
        "userId": 2,
        "description": "Buy New Carpet",
        "price": 200,
        "status": "toBuy"
      }
    ]

    service.getShoppingItems().subscribe(res =>{
      expect(res).toEqual(mockData);
    })
    const mockReq = httpMock.expectOne(url);
    expect(mockReq.request.responseType).toEqual('json');
    expect(mockReq.request.method.toLowerCase()).toEqual('get');
    mockReq.flush(mockData);

    httpMock.verify();

  })

  it('should call patch request to update a shopping item',()=>{
    let shoppingItem = {id:1};
    let newUrl = `${url}/${shoppingItem.id}`;

    service.updateShoppingItem(shoppingItem).subscribe(()=>{

    })
    const OriginalMockRequest = httpMock.expectNone(url);
    const mockReq = httpMock.expectOne(newUrl);
    expect(mockReq.request.responseType).toEqual('json');
    expect(mockReq.request.method.toLowerCase()).toEqual('patch');
    mockReq.flush({});
    httpMock.verify();

    
  })

  it('should Call shopping items api with post to create new shopping item',()=>{
    let newItem = {
      description:'dummy Item',
      userId:1,
      price:200
    }

    service.createShoppingItem(newItem).subscribe(()=>{

    })
    const mockReq = httpMock.expectOne(url);
    expect(mockReq.request.body).toEqual(newItem);
    expect(mockReq.request.responseType).toEqual('json');
    expect(mockReq.request.method.toLowerCase()).toEqual('post');

    mockReq.flush({});
    httpMock.verify();

  })

  it('should call get method with query param for userId to get shopping items per user',()=>{
    const mockData = [
      {
        "id": 6,
        "userId": 2,
        "description": "Buy A New Sofa",
        "price": 500,
        "status": "toBuy"
      },
      {
        "id": 7,
        "userId": 2,
        "description": "Buy a new 50 inch LCD",
        "price": 2000,
        "status": "toBuy"
      },
      {
        "id": 8,
        "userId": 2,
        "description": "Buy Paint Buckets",
        "price": 500,
        "status": "Bought"
      },
      {
        "id": 9,
        "userId": 2,
        "description": "Buy New Carpet",
        "price": 200,
        "status": "toBuy"
      }
    ]

    const newUrl = `${url}?userId=1`;

    service.getShoppingItemsByUserId(1).subscribe(res=>{
      expect(res).toEqual(mockData);
    })

    const mockReq = httpMock.expectOne(newUrl);
    expect(mockReq.request.responseType).toEqual('json');
    expect(mockReq.request.method.toLowerCase()).toEqual('get');
    mockReq.flush(mockData);
    httpMock.verify();
  })

  it('should call delete method to delete a shopping list',()=>{
    let id = 1;
    let newUrl = `${url}/${id}`;

    service.deleteShoppingItem(1).subscribe(()=>{

    })

    const mockReq = httpMock.expectOne(newUrl);
    expect(mockReq.request.responseType).toEqual('json');
    expect(mockReq.request.method.toLowerCase()).toEqual('delete');
    mockReq.flush({});
    httpMock.verify();
  })


});
