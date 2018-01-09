import { Routes, RouterModule, CanActivate } from '@angular/router';
import { UserShoppingItemsComponent } from './shopping-items/user-shopping-items/user-shopping-items.component';
import { NgModule } from '@angular/core';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { UsersComponent } from './users/users/users.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuardService } from './shared/auth-guard/auth-guard.service';

const routes:Routes = [
    {
        path:'',
        redirectTo:'/ShoppingList',
        pathMatch:'full'  
    }, 
    {
        path:'ShoppingList',
        component:ShoppingItemsComponent,
        canActivate:[AuthGuardService]
    },
    {
        path:'Users',
        component:UsersComponent,
        canActivate:[AuthGuardService]
    },
    {
        path:'login',
        component:LoginComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }