import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {

  constructor(private router:Router) { console.log('parent constructor') }

  ngOnInit() {
    console.log("parent oninit");
  }

  goToUsers(){
    this.router.navigate(['/Users']);
  }

}
