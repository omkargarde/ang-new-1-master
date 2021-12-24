import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() product:Product;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    
  }
  

  
  onSelected(){
    this.product.count++;
    this.productService.productSelected.emit(this.product);
  }

}
