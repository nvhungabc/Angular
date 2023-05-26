import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { LayoutsAdminComponent } from './layouts/layouts-admin/layouts-admin.component';
import { DashbroadComponent } from './pages/dashbroad/dashbroad.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ResgisterComponent } from './pages/resgister/resgister.component';
import { LayoutsUserComponent } from './layouts/layouts-user/layouts-user.component';
import { GioithieuComponent } from './pages/gioithieu/gioithieu.component';
import { ThongtinComponent } from './pages/thongtin/thongtin.component';
import { CartComponent } from './pages/cart/cart.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutsUserComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'resgister', component: ResgisterComponent },
      { path: 'gioithieu', component: GioithieuComponent },
      { path: 'thongtin', component: ThongtinComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'products/:id/cart', component: CartComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutsAdminComponent,
    children: [
      { path: '', component: DashbroadComponent },
      { path: 'products', component: ProductListComponent },
      { path: "products/add", component: ProductAddComponent },
      { path: 'products/:id/edit', component: ProductEditComponent },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
