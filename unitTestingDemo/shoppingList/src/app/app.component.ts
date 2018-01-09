import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SummaryService } from './shared/summary/summary.service';
import { UsersService } from './shared/users/users.service';
import { ShoppingItemsService } from './shared/shopping-items/shopping-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  /**
   *
   */
  constructor(private summaryService:SummaryService,private userService:UsersService,private shoppingItemService:ShoppingItemsService) {
    
  }

  ngOnInit(){
    this.summaryService.getShoppingSummary().subscribe(data =>{
      console.log(data);
    })

    this.summaryService.getUserSummary().subscribe(data =>{
      console.log(data);
    })

    this.userService.getUserByUsername("Maghraby").subscribe(res =>{
      console.log(res)
      if(res)
      console.log('found');
      else
      console.log('notfound')
    })

    this.shoppingItemService.getShoppingItemsByUserId(1).subscribe(res =>{
      console.log(res);
    })

    


  }
}
