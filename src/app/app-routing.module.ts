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
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';
import { ProfileSettingComponent } from './components/profile-setting/profile-setting.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', canActivate:[authGuard], component: HomeComponent, title : 'Home'},
  {path: 'products', canActivate:[authGuard], component: ProductsComponent, title : 'products'},
  {path: 'cart', canActivate:[authGuard], component: CartComponent, title : 'cart'},
  {path: 'wishlist', canActivate:[authGuard], component: WishlistComponent, title : 'wishlist'},
  {path: 'categories', canActivate:[authGuard], component: CategoriesComponent, title : 'categories'},
  {path: 'categoryProductsComponent', canActivate:[authGuard], component: CategoryProductsComponent, title : 'categories-product'},
  {path: 'brands', canActivate:[authGuard], component: BrandsComponent, title : 'brands'},
  {path: 'productDetails/:id', canActivate:[authGuard], component: ProductDetailsComponent, title : 'Product Details'},
  {path: 'shippingAddress/:id/:type', canActivate:[authGuard], component: ShippingAddressComponent, title : 'shipping Address'},
  {path: 'profileSetting', canActivate:[authGuard], component: ProfileSettingComponent, title : 'Profile setting'},
  {path: 'login', canActivate:[noAuthGuard], component: LoginComponent, title : 'login'},
  {path: 'signup', canActivate:[noAuthGuard], component: SignUpComponent, title : 'signup'},
  {path: 'forgotPassword', canActivate:[noAuthGuard], component: ForgotPasswordComponent, title : 'forgot Password'},
  {path: 'verifyPassword', canActivate:[noAuthGuard], component: VerifyPasswordComponent, title : 'Verify Password'},
  {path: 'restPassword', canActivate:[noAuthGuard], component: ResetPasswordComponent, title : 'Rest Password'},
  {path: '**', component: NotFoundComponent, title : '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
