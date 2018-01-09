import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth-service/auth.service';
import { ShoppingItemsService } from '../../shared/shopping-items/shopping-items.service';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-shopping-items',
  templateUrl: './user-shopping-items.component.html',
  styleUrls: ['./user-shopping-items.component.css']
})
export class UserShoppingItemsComponent implements OnInit {
  items: Array<any>
  editItems: Array<any> = [];

  constructor(private authService: AuthService, private shoppingItemService: ShoppingItemsService, private formBuilder: FormBuilder) { }
  newItemForm: FormGroup
  ngOnInit() {
    
    this.logData();
    this.newItemForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      status: ['toBuy', [Validators.required]],
      price: [null, [Validators.required]]
    })
    this.loadItems();
  }

    logData(){
      console.log('data');
    }
  deleteitem(item) {
    this.shoppingItemService.deleteShoppingItem(item.id).subscribe(() => {
      this.loadItems();

    });
  }

  loadItems() {
    this.shoppingItemService.getShoppingItemsByUserId(this.authService.currentUser.userId).
      subscribe((res: Array<any>) => {
        this.items = res;
        console.log(this.items);
      })
  }

  edit(item) {

    if (!this.editItems.includes(item)) {
      this.editItems.push(item)

    }
  }

  saveItem(item) {
    this.shoppingItemService.updateShoppingItem(item).subscribe(() => {
      this.loadItems();
    })
  }

  addItem() {
    if (!this.newItemForm.invalid) {
      const values = this.newItemForm.value;
      const newItem = {
        userId: this.authService.currentUser.userId,
        price: values['price'],
        description: values['description'],
        status: values['status']
      }
      this.shoppingItemService.createShoppingItem(newItem).subscribe(() => {
        this.loadItems();
        this.newItemForm.reset();
      })
    }
  }
}






