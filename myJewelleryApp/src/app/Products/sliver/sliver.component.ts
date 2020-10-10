import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/products';
import { SLIVERPRODUCT } from '../../data/slivermock1';

@Component({
  selector: 'app-sliver',
  templateUrl: './sliver.component.html',
  styleUrls: ['./sliver.component.css'],
})
export class SliverComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.sliverItems = SLIVERPRODUCT;
  }
  sliverTitle = 'sliver Item here';

  sliverItems: Product[];
}
