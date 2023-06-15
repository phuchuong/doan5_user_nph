import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitietspComponent } from './modules/homes/chitietsp/chitietsp.component';
import { GiohangComponent } from './modules/homes/giohang/giohang.component';
import { IndexComponent } from './modules/homes/index/index.component';
import { LoginComponent } from './modules/homes/login/login.component';
import { SanphamallComponent } from './modules/homes/sanphamall/sanphamall.component';
import { ThanhtoanComponent } from './modules/homes/thanhtoan/thanhtoan.component';
import { TrangconComponent } from './modules/homes/trangcon/trangcon.component';

import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { DangkyComponent } from './modules/homes/dangky/dangky.component';
import { ThongbaoComponent } from './modules/homes/thongbao/thongbao.component';
import { TintucComponent } from './modules/homes/tintuc/tintuc.component';
import { DonhangcuatoiComponent } from './modules/homes/donhangcuatoi/donhangcuatoi.component';
import { TrangcanhanComponent } from './modules/homes/trangcanhan/trangcanhan.component';




const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path:'',component: IndexComponent},
  {path:'footer',component: FooterComponent},
  {path:'chitiet',component: ChitietspComponent},
  {path:'giohang',component: GiohangComponent},
  {path:'trangcon',component: TrangconComponent},
  {path:'thanhtoan', component:ThanhtoanComponent},
  {path:'allsanpham', component:SanphamallComponent},
  {path:'login', component:LoginComponent},
  {path:'dangky', component:DangkyComponent},
  {path:'thongbao1', component:ThongbaoComponent},
  {path:'tintuc', component:TintucComponent},
  {path:'donhang', component:DonhangcuatoiComponent},
  {path:'trangcanhan', component:TrangcanhanComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
