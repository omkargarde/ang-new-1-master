import { Component, Inject, Injectable, OnDestroy, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ProductService } from '../items/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable({providedIn: 'root'})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  userEmail:string = null;
  
  constructor(
  @Inject(ProductService) private productService,
  private router:Router,
  private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      this.userEmail = user.email;
      
    });
  
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }
  onSelect(){

    this.router.navigate(['/display']);
  }

  onLogOut(){
    this.authService.logout();
    // this.router.navigate(['/auth']);
  }

  onSaveData(){
    this.productService.storeProduct();
  }
}
