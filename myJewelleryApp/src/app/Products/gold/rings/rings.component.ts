import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/products';
import { GOLDRINGS } from '../../../data/goldmock';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.css'],
})
export class RingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.GoldItemsRings = GOLDRINGS;
  }

  goldRing_Title = 'Gold Rings for you';

  GoldItemsRings: Product[];
}
