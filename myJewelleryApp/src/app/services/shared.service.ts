import { Injectable } from '@angular/core';
import { GOLDPARDUCT } from '../data/goldmock';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  getGoldData() {
    return GOLDPARDUCT;
  }
}
