import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/products';
import { GOLDPARDUCT } from '../../../data/goldmock';

@Component({
  selector: 'app-goldmenu',
  templateUrl: './goldmenu.component.html',
  styleUrls: ['./goldmenu.component.css'],
})
export class GoldmenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.GoldItems = GOLDPARDUCT;
  }
  GoldItems: Product[];
}
