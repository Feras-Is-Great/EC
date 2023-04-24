import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { HomeComponent } from './Home/Home.component';
import { SliderComponent } from './Home/Slider/Slider.component';
import { CategoriesImagesComponent } from './Home/CategoriesImages/CategoriesImages.component';
import { FooterComponent } from './Home/Footer/Footer.component';
import { CartComponent } from './Cart/Cart.component';
import { LoginComponent } from './Login/Login.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { CategoryComponent } from './Category/Category.component';
import { ProductComponent } from './Product/Product.component';
import { WishListComponent } from './WishList/WishList.component';
import { CardComponent } from './WishList/Card/Card.component';
import { PaymentComponent } from './Payment/Payment.component';
import { InvoiceComponent } from './Invoice/Invoice.component';

@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
      NavbarComponent,
      SliderComponent,
      CategoriesImagesComponent,
      FooterComponent,
      CartComponent,
      LoginComponent,
      SignUpComponent,
      CategoryComponent,
      ProductComponent,
      WishListComponent,
      CardComponent,
      PaymentComponent,
      InvoiceComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
