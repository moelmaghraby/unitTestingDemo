import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../../shared/summary/summary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-summary',
  templateUrl: './users-summary.component.html',
  styleUrls: ['./users-summary.component.css']
})
export class UsersSummaryComponent implements OnInit {

  constructor(private summaryService:SummaryService,private router:Router) { }
  items:Array<any>
  ngOnInit() {
    this.summaryService.getUserSummary().subscribe(data =>{
      this.items = data;
    })
  }
  goToShoppingItems(){
    this.router.navigate(['/ShoppingList']);
  }

}
