import { Injectable } from '@angular/core';
import { ShoppingItemsService } from '../shopping-items/shopping-items.service';
import { UsersService } from '../users/users.service';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import 'rxjs/add/operator/map';


@Injectable()
export class SummaryService {
  constructor(private shoppingItemsService:ShoppingItemsService,
              private usersService:UsersService) { }
  
  getUserSummary(){
    return forkJoin([this.usersService.getUsers(),this.shoppingItemsService.getShoppingItems()]).map(data =>{
      const users = data[0] as Array<any>;
      const shoppingitems = data[1] as Array<any>;
      let userItems = []
      users.forEach(element => {
        
        let cost = shoppingitems.filter(el => el.userId === element.id).map(item =>{
          return item.price
        }).reduce((a,b)=> a+b,0)

        userItems.push({
          user:element.name,
          cost:cost
        })
        })
        return userItems;
      });

    }

    getShoppingSummary(){
      return this.shoppingItemsService.getShoppingItems().map((res : Array<any>) =>{
        const itemStatus = ['toBuy','Bought'];
        let summaryObj = []
        itemStatus.forEach(element => {
          const shoppingitemsCost = res.filter(el => el.status === element).map(item => item.price).reduce((a,b)=> a+b,0);
          
          summaryObj.push({status : element , cost:shoppingitemsCost})


        });
        return summaryObj;
      })
    }
    
  }


