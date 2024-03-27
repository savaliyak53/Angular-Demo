import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { ToarrayComponent } from './toarray/toarray.component';
import { TakeComponent } from './take/take.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';
import { SubjectComponent } from './Data_binding/subject.component';
import { DirectiveComponent } from './directive/directive.component';
import { DecoratoeComponent } from './decoratoe/decoratoe.component';
import { TRVComponent } from './trv/trv.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { HostBindingComponent } from './host-binding/host-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { CreateCustomDirectiveComponent } from './create-custom-directive/create-custom-directive.component';
import { ViewEncapsulationComponent } from './viewEncapsulation/view-encapsulation/view-encapsulation.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SignalsComponent } from './signals/signals/signals.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';

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
    path: 'directive',
    component: DirectiveComponent,
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
    path: 'decorator',
    component: DecoratoeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'trv',
    component: TRVComponent,
  },
  {
    path: 'viewchild',
    component: ViewchildComponent,
  },
  {
    path: 'viewchildren',
    component: ViewChildrenComponent,
  },
  {
    path: 'contentchild',
    component: ContentChildComponent,
  },

  {
    path: 'hostbinding',
    component: HostBindingComponent,
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },

  {
    path: 'createCustomDirective',
    component: CreateCustomDirectiveComponent,
  },
  {
    path: 'viewen',
    component: ViewEncapsulationComponent,
  },
  {
    path: 'ngcontainer',
    component: NgcontainerComponent,
  },
  {
    path: 'ngContent',
    component: NgContentComponent,
  },
  {
    path: 'ngtemplate',
    component: NgtemplateComponent,
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
