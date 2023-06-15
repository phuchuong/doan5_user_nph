import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './modules/homes/index/index.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ChitietspComponent } from './modules/homes/chitietsp/chitietsp.component';
import { FormsModule } from '@angular/forms';
import { GiohangComponent } from './modules/homes/giohang/giohang.component';
import { TrangconComponent } from './modules/homes/trangcon/trangcon.component';
import { ThanhtoanComponent } from './modules/homes/thanhtoan/thanhtoan.component';
import { SanphamallComponent } from './modules/homes/sanphamall/sanphamall.component';
import { LoginComponent } from './modules/homes/login/login.component';
import { DangkyComponent } from './modules/homes/dangky/dangky.component';
import { ThongbaoComponent } from './modules/homes/thongbao/thongbao.component';
import { TintucComponent } from './modules/homes/tintuc/tintuc.component';
import { DonhangcuatoiComponent } from './modules/homes/donhangcuatoi/donhangcuatoi.component';
import { TrangcanhanComponent } from './modules/homes/trangcanhan/trangcanhan.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    ChitietspComponent,
    GiohangComponent,
    TrangconComponent,
    ThanhtoanComponent,
    SanphamallComponent,
    LoginComponent,
    DangkyComponent,
    ThongbaoComponent,
    TintucComponent,
    DonhangcuatoiComponent,
    TrangcanhanComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {


 }
