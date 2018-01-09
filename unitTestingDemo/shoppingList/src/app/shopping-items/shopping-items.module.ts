import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserShoppingItemsComponent } from './user-shopping-items/user-shopping-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingItemsComponent } from './shopping-items.component';
import { SummaryShoppingItemsComponent } from './summary-shopping-items/summary-shopping-items.component';
import { HoverDirectiveDirective } from '../shared/hover-directive/hover-directive.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  declarations: [ShoppingItemsComponent, UserShoppingItemsComponent, SummaryShoppingItemsComponent]
})
export class ShoppingItemsModule { }
 