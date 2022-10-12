import { Component, OnInit } from '@angular/core';
import ProductJson from '../../data/products.json';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products : any[];

  constructor() { 
    this.products = ProductJson;
  }

  ngOnInit(): void {
  }

}
