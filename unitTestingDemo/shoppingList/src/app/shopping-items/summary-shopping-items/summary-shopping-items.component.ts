import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../../shared/summary/summary.service';

@Component({
  selector: 'app-summary-shopping-items',
  templateUrl: './summary-shopping-items.component.html',
  styleUrls: ['./summary-shopping-items.component.css']
})
export class SummaryShoppingItemsComponent implements OnInit {
  items:Array<any>;
  constructor(private summaryService:SummaryService) { }

  ngOnInit() {
    this.summaryService.getShoppingSummary().subscribe(res =>{
      this.items = res
    })
  }

}
