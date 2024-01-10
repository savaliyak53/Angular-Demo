import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import internal from 'stream';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { ToarrayComponent } from './toarray/toarray.component';
import { PluckComponent } from './pluck/pluck.component';
import { TakeComponent } from './take/take.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';
import { SubjectComponent } from './subject/subject.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'seller',
    component: SellerAuthComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'productlist',
    component: ProductListComponent,
  },
  {
    path: 'interval',
    component: IntervalComponent,
  },
  {
    path: 'offrom',
    component: OfComponent,
  },
  {
    path: 'toarray',
    component: ToarrayComponent,
  },
  {
    path: 'take',
    component: TakeComponent,
  },
  {
    path: 'retrywhen',
    component: RetryWhenComponent,
  },
  {
    path: 'subject',
    component: SubjectComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
