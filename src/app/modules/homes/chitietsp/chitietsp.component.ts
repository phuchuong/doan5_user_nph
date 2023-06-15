import { ApiService } from './../../../core/services/api.service';
import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';
@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.scss'],
})
export class ChitietspComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  public list_item: any;
  constructor(injector: Injector, private _api: ApiService,public router:Router) {
    super(injector);
  }
  sanpham:any=JSON.parse(localStorage.getItem("product") || '{}');
  listCart:any=[];
  cart={MaDT:'',TenDT:'',AnhDT:'',TenMS:'',Gia:0,SoLuong:1,Sale:0,TongTien:0}
  soluong=1
  PhotoPath="http://localhost:5093/Photos";


  ngOnInit(): void {
    console.log(this.sanpham);
    this.cart.MaDT=this.sanpham.MaDT;
    this.cart.TenDT=this.sanpham.TenDT;
    this.cart.AnhDT=this.sanpham.AnhDT;
    this.cart.TenMS=this.sanpham.TenMS;
    this.cart.Gia=this.sanpham.Gia;
    // this.cart.SoLuong=this.sanpham.Soluong;
    this.cart.Sale=this.sanpham.Sale;
    this.cart.TongTien=this.sanpham.Gia*(100-this.sanpham.Sale)/100*this.soluong;

      setTimeout(() => {
        this.loadScripts(
          'assets/js/hide_menu.js',
          'assets/js/slide_show.js'
          ,'assets/catalog/view/javascript/common.js'
          ,'assets/catalog/view/javascript/webdigify/custom.js',
          'assets/chitiet.js'
          // ,'assets/catalog/view/javascript/webdigify/jstree.min.js'
          // ,'assets/catalog/view/javascript/webdigify/carousel.min.js'
          // ,'assets/catalog/view/javascript/webdigify/webdigify.min.js'
          // ,'assets/catalog/view/javascript/webdigify/jquery.custom.min.js'
          // ,'assets/catalog/view/javascript/webdigify/jquery.formalize.min.js'
          // ,'assets/catalog/view/javascript/webdigify/jquery.elevatezoom.min.js'
          // ,'assets/catalog/view/javascript/webdigify/bootstrap-notify.min.js'
          // ,'assets/catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js'
          // ,'assets/catalog/view/javascript/webdigify/tabs.js'
          // ,'assets/catalog/view/javascript/webdigify/jquery.hoverdir.js'
          // ,'assets/catalog/view/javascript/webdigify/modernizr.js'
          // ,'assets/catalog/view/javascript/lightbox/lightbox-2.6.min.js'
          // ,'assets/catalog/view/javascript/webdigify/inview.js'
          // ,'assets/catalog/view/javascript/webdigify/megamenu.js'
          // ,'assets/catalog/view/javascript/webdigify/slick.js'
          // ,'assets/catalog/view/javascript/jquery/swiper/js/swiper.jquery.js'
          // ,'assets/catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.js'
          // ,'assets/catalog/view/javascript/webdigify/jquery.bpopup.min.js'
          // ,'assets/catalog/view/javascript/webdigify/jquery.cookie.js'
          //  ,'assets/catalog/view/javascript/jquery/jquery-2.1.1.min.js'
          //  ,'assets/catalog/view/javascript/bootstrap/js/bootstrap.min.js'
          //  ,'assets/catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.js'
          //  ,'assets/catalog/view/javascript/jquery.countdown.min.js'
          //  ,'assets/catalog/view/javascript/jquery.countdown.js'
        );
      });
  }


  cartproduct() {
    let check=true;
    if(localStorage.getItem('listCart')==null||localStorage.getItem('listCart')==''){
      this.listCart.unshift(this.cart);
      localStorage.setItem('listCart',JSON.stringify(this.listCart));
    }
    else{
      var list=JSON.parse(localStorage.getItem('listCart')||'{}');
      for(let i=0;i<list.length; i++){
        if(list[i].MaDT==this.cart.MaDT){
          list[i].SoLuong=list[i].SoLuong+this.soluong
          this.listCart=list;
          localStorage.setItem('listCart',JSON.stringify(this.listCart));
          check=false;
          break
        }
      }
      if(check){
        this.listCart=JSON.parse(localStorage.getItem('listCart')||'{}');
        this.listCart.unshift(this.cart);
        localStorage.setItem('listCart',JSON.stringify(this.listCart));
      }
    }
    console.log(this.listCart);
    this.router.navigate(['giohang']);
  }

  ngAfterViewInit(): void {

  }

}
