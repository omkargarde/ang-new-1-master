import { Component, OnInit } from '@angular/core';
import { Product } from './items/product.model';
import { ProductService } from './items/product.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent implements OnInit {
  title = 'ang-new';

  selectedProduct:Product;

  constructor(private productService: ProductService,private authService:AuthService){

  }

  ngOnInit(): void {
      this.authService.autoLogin();
  }

  
}
// 