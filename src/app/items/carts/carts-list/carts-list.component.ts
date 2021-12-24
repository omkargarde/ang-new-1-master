import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.css']
})
export class CartsListComponent implements OnInit {
  
  @Input() product:Product;
 
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    
  }
  
  onSelected(){
    
    
    this.productService.fetchProducts;
    this.product.count--;
    if(this.product.count <= 0) {
      this.product.visible = "invisible";
      
    }
    if(this.product.count > 0){
      this.product.visible = "visible";
      
    }
    
    this.productService.productSelected.emit(this.product);
    
  }
}
