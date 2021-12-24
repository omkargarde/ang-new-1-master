import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './items/products/products.component';
import { CartsComponent } from './items/carts/carts.component';
import { DirComponent } from './dir/dir.component';
import { ProductListComponent } from './items/products/product-list/product-list.component';
import { CartsListComponent } from './items/carts/carts-list/carts-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DisplayComponent } from './items/display/display.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { tap } from "rxjs/operators";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartsComponent,
    DirComponent,
    ProductListComponent,
    CartsListComponent,
    DisplayComponent,
    LoginComponent,
    AuthComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
