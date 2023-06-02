import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashbroadComponent } from './pages/dashbroad/dashbroad.component';
import { LayoutsAdminComponent } from './layouts/layouts-admin/layouts-admin.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { LoginComponent } from './pages/login/login.component';
import { ResgisterComponent } from './pages/resgister/resgister.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LayoutsUserComponent } from './layouts/layouts-user/layouts-user.component';
import { GioithieuComponent } from './pages/gioithieu/gioithieu.component';
import { ThongtinComponent } from './pages/thongtin/thongtin.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductListUserComponent } from './component/product-list-user/product-list-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TintucComponent } from './layouts/tintuc/tintuc.component';
import { SearchComponent } from './layouts/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    DashbroadComponent,
    LayoutsAdminComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductItemComponent,
    ProductListComponent,
    LoginComponent,
    ResgisterComponent,
    FooterComponent,
    HeaderComponent,
    LayoutsUserComponent,
    GioithieuComponent,
    ThongtinComponent,
    CartComponent,
    ProductListUserComponent,
    TintucComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
