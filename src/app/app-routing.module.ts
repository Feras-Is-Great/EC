import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Home/Home.component';
import { CartComponent } from './Cart/Cart.component';
import { LoginComponent } from './Login/Login.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { CategoryComponent } from './Category/Category.component';
import { ProductComponent } from './Product/Product.component';
import { WishListComponent } from './WishList/WishList.component';
import { PaymentComponent } from './Payment/Payment.component';
import { InvoiceComponent } from './Invoice/Invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'SignIn', component: LoginComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'WishList', component: WishListComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: 'Invoice', component: InvoiceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
