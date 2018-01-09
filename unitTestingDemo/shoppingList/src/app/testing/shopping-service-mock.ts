import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';;

@Injectable()
export class ShoppingItemsServiceMock {

     mockData = [
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
  constructor() { }

  getShoppingItems(){
    return Observable.of(this.mockData);
  }

  deleteShoppingItem(id){
    
    return Observable.of([{}]);
  }

  createShoppingItem(shoppingItem){
    return Observable.of([{}]);
  }

  updateShoppingItem(shoppingItem){
  
    return Observable.of([{}]);
  }

  getShoppingItemsByUserId(id){
    return Observable.of([this.mockData]);
  }


}
