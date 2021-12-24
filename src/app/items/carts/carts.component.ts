import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';
import { ProductService } from '../product.service';




@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent implements OnInit {
  Products:Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.Products = this.productService.getProducts();
    
  }
  
}
