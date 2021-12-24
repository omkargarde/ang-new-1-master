import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.gaurd";
import { HeaderComponent } from "./header/header.component";
import { CartsComponent } from "./items/carts/carts.component";
import { DisplayComponent } from "./items/display/display.component";
import { ProductsComponent } from "./items/products/products.component";
import { LoginComponent } from "./login/login.component";
import { CanActivate } from "@angular/router";

const appRoutes:Routes = [
    {path:'',redirectTo:'auth',pathMatch:'full'},
    
    { path: 'header', component:HeaderComponent},
    { path: 'product', component: ProductsComponent},
    { path: 'cart', component: CartsComponent},
    {path:'display', component:DisplayComponent},
    {path:'login', component:LoginComponent},
    {path:'auth',component:AuthComponent},
    
    
    // { path: 'header', component:HeaderComponent,canActivate:[AuthGuard]},
    // { path: 'product', component: ProductsComponent,canActivate:[AuthGuard]},
    // { path: 'cart', component: CartsComponent,canActivate:[AuthGuard]},
    // {path:'display', component:DisplayComponent,canActivate:[AuthGuard]},

    {path:'auth',component:AuthComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}