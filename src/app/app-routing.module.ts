import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyPasswordComponent } from './components/verify-password/verify-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title : 'Home'},
  {path: 'products', component: ProductsComponent, title : 'products'},
  {path: 'cart', component: CartComponent, title : 'cart'},
  {path: 'categories', component: CategoriesComponent, title : 'categories'},
  {path: 'brands', component: BrandsComponent, title : 'brands'},
  {path: 'login', component: LoginComponent, title : 'login'},
  {path: 'signup', component: SignUpComponent, title : 'signup'},
  {path: 'forgotPassword', component: ForgotPasswordComponent, title : 'forgot Password'},
  {path: 'verifyPassword', component: VerifyPasswordComponent, title : 'Verify Password'},
  {path: 'restPassword', component: ResetPasswordComponent, title : 'Rest Password'},
  {path: '**', component: NotFoundComponent, title : '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
