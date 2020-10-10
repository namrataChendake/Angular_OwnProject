import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/products';
import { GOLDBANGALS } from '../../../data/goldmock';

@Component({
  selector: 'app-banglas',
  templateUrl: './banglas.component.html',
  styleUrls: ['./banglas.component.css'],
})
export class BanglasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.GoldItemsBangals = GOLDBANGALS;
  }
  goldbangals_Title = 'Golden Bangals for you';

  GoldItemsBangals: Product[];
}
