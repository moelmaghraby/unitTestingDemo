import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShoppingItemsService {

   url = "http://localhost:3000/shoppingItems"
  constructor(private http:HttpClient) { }

  getShoppingItems(){
    return this.http.get(this.url)
  }

  deleteShoppingItem(id){
    
    const url = `${this.url}/${id}`;
    
    return this.http.delete(url)
  }

  createShoppingItem(shoppingItem){
    return this.http.post(this.url,shoppingItem)
  }

  updateShoppingItem(shoppingItem){
  
    let url = `${this.url}/${shoppingItem.id}`
    return this.http.patch(url,shoppingItem)
  }

  getShoppingItemsByUserId(id){
    let url = `${this.url}?userId=${id}`;
    return this.http.get(url);
  }


}
