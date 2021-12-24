import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {
  Products:Product[] = [];
  selectedProduct:Product;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    

    this.Products = this.productService.getProducts();
    this.productService.setProduct(this.Products);
  }

    
}
