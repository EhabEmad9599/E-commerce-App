import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyPasswordComponent } from './components/verify-password/verify-password.component';
import { ProfileSettingComponent } from './components/profile-setting/profile-setting.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesSliderComponent } from './components/categories-slider/categories-slider.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    NotFoundComponent,
    SignUpComponent,
    LoginComponent,
    CategoriesComponent,
    BrandsComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyPasswordComponent,
    ProfileSettingComponent,
    ProductComponent,
    ProductDetailsComponent,
    CategoriesSliderComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor, loadingInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
