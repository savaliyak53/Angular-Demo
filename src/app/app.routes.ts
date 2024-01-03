import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'seller',
    component: SellerAuthComponent,
  },
  {
    path: 'login',
    component: SellerAuthComponent,
  },
  {
    path: 'cart',
    component: SellerAuthComponent,
  },
];
