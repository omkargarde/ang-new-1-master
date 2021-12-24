import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";
import { take } from "rxjs/operators";
import { User } from "../auth/user.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService{
    productSelected = new EventEmitter<Product>();
    productsChanged = new Subject<Product[]>();
    constructor(
        private http:HttpClient,
        private authService: AuthService,
        ){

    }
     private Products:Product[] = [
        new Product('banana',0,'assets/mockup-graphics-Kl3467edwsE-unsplash.jpg'),
        new Product('orange',0,'assets/orange-600x600-500x500.jpg'),
        
      ];

        

  
      setProduct(Products: Product[]){
        this.Products = Products;
        this.productsChanged.next(this.Products.slice());
      }

        getProducts(){
            this.fetchProducts();
          return this.Products.slice();
        }

      fetchProducts(){
          this.http
          .get<Product[]>
          ('https://angular-e37e0-default-rtdb.asia-southeast1.firebasedatabase.app/products.json').subscribe(Products => {
            this.setProduct(Products)
          });
          
        }

      

      
        storeProduct(){
            this.http
            .put('https://angular-e37e0-default-rtdb.asia-southeast1.firebasedatabase.app/products.json',
            this.Products).subscribe(Response => {
                console.log(Response);
            });
          }
}