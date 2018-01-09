import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingItemsService } from './shopping-items/shopping-items.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { UsersService } from './users/users.service';
import { CurrencyPipePipe } from './currency-pipe/currency-pipe.pipe';
import { HoverDirectiveDirective } from './hover-directive/hover-directive.directive';
import { SummaryService } from './summary/summary.service';
import { AuthService } from './auth-service/auth.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [CurrencyPipePipe, HoverDirectiveDirective, LoginComponent],
  providers:[ShoppingItemsService,HttpClient,UsersService,SummaryService,AuthService,AuthGuardService],
  exports:[CurrencyPipePipe,HoverDirectiveDirective]
  
})
export class SharedModule { }
