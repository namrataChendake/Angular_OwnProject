import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/products';
import { GOLDPARDUCT } from '../../data/goldmock';
// import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css'],
})
export class GoldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.GoldItems = GOLDPARDUCT;

    // var sharedService = new SharedService();
    // this.GoldItems = sharedService.getGoldData();
  }
  goldTitle = 'Gold Item here';

  GoldItems: Product[];
}
