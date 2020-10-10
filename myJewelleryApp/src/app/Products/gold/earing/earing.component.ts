import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/products';
import { GOLDEARINGS } from '../../../data/goldmock';

@Component({
  selector: 'app-earing',
  templateUrl: './earing.component.html',
  styleUrls: ['./earing.component.css'],
})
export class earingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.GoldItemsEarigs = GOLDEARINGS;
  }

  goldEaring_Title = 'Gold Earing for you';

  GoldItemsEarigs: Product[];
}
