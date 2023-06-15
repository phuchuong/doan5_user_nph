

import { ApiService } from './../../../core/services/api.service';
import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  Renderer2,
} from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sanphamall',
  templateUrl: './sanphamall.component.html',
  styleUrls: ['./sanphamall.component.scss'],
})
export class SanphamallComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  public list_item: any;

  listCart: any = [];

  cart = {
    MaDT: '',
    TenDT: '',
    IDLoaiDT:'',
    AnhDT: '',
    TenMS:'',
    Gia: 0,
    SoLuong: 1,
    Sale: 0,
    TongTien: 0,
  };
  PhotoPath = environment.PHOTO_API;
  formHeader = '';
  page: number = 1;
  totalLength: any;

  constructor(
    injector: Injector,
    private _api: ApiService,
    private http: HttpClient,
    public router: Router
  )
  {
    super(injector);
  }
  listallsptrunggian:any[]=[];
  
  ngOnInit(): void {
    this._api.get('/api/DienThoai').subscribe((res) => {
      this.list_item = res;
      this.listallsptrunggian=res;
      console.log(this.list_item);
      setTimeout(() => {
        this.loadScripts(
          'assets/js/hide_menu.js',
          'assets/js/slide_show.js',
          'assets/catalog/view/javascript/common.js',
          'assets/catalog/view/javascript/webdigify/custom.js',
          'assets/a.js'
          //   // ,'assets/catalog/view/javascript/webdigify/jstree.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/carousel.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/webdigify.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/jquery.custom.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/jquery.formalize.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/jquery.elevatezoom.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/bootstrap-notify.min.js'
          //   // ,'assets/catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/tabs.js'
          //   // ,'assets/catalog/view/javascript/webdigify/jquery.hoverdir.js'
          //   // ,'assets/catalog/view/javascript/webdigify/modernizr.js'
          //   // ,'assets/catalog/view/javascript/lightbox/lightbox-2.6.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/inview.js'
          //   // ,'assets/catalog/view/javascript/webdigify/megamenu.js'
          //   // ,'assets/catalog/view/javascript/webdigify/slick.js'
          //   // ,'assets/catalog/view/javascript/jquery/swiper/js/swiper.jquery.js'
          //   // ,'assets/catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/jquery.bpopup.min.js'
          //   // ,'assets/catalog/view/javascript/webdigify/jquery.cookie.js'
          //   //  ,'assets/catalog/view/javascript/jquery/jquery-2.1.1.min.js'
          //   //  ,'assets/catalog/view/javascript/bootstrap/js/bootstrap.min.js'
          //   //  ,'assets/catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.js'
          //   //  ,'assets/catalog/view/javascript/jquery.countdown.min.js'
          //   //  ,'assets/catalog/view/javascript/jquery.countdown.js'
        );
      });
    });
  }

  // loaisanpham(s: any) {
  //   if (
  //     localStorage.getItem('id') == null ||
  //     localStorage.getItem('id') == ''
  //   ) {
  //     localStorage.setItem('id', JSON.stringify(s));
  //   } else {
  //     localStorage.setItem('id', JSON.stringify(s));
  //   }
  //   console.log(localStorage.getItem('id'));
  //   this.router.navigate(['trangcon']);
  // }

  chitietsanpham(id: any) {
    if (
      localStorage.getItem('product') == null ||
      localStorage.getItem('product') == ''
    ) {
      localStorage.setItem('product', JSON.stringify(id));
    } else {
      localStorage.setItem('product', JSON.stringify(id));
    }
    console.log(localStorage.getItem('product'));
    this.router.navigate(['chitiet']);
  }

  cartproduct(list: any) {
    this.cart.MaDT=list.MaDT;
    this.cart.TenDT=list.TenDT;
    this.cart.IDLoaiDT=list.IDLoaiDT;
    this.cart.AnhDT=list.AnhDT;
    this.cart.TenMS=list.TenMS;
    this.cart.Sale=list.Sale;
    this.cart.Gia=list.Gia;
    this.cart.TongTien=list.Gia*(100-list.Sale)/100;

    let check=true;
    if(localStorage.getItem('listCart')==null||localStorage.getItem('listCart')==''){
      this.listCart.unshift(this.cart);
      localStorage.setItem('listCart',JSON.stringify(this.listCart));
    }
    else{
      var list=JSON.parse(localStorage.getItem('listCart')||'{}');
      for(let i=0;i<list.length; i++){
        if(list[i].MaDT==this.cart.MaDT){
          list[i].SoLuong=list[i].SoLuong+1
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
    alert("Đã Thêm Giỏ Hàng Thành Công");
  }
  Search() {
    if (this.cart.TenDT == '') {
      this.ngOnInit();
    } else {
      this.list_item = this.list_item.filter((res: any) => {
        return res.TenDT.toLocaleLowerCase().match(
          this.cart.TenDT.toLocaleLowerCase()
        );
      });
    }
  }
  giatriduocchon=0;
  SearchbyPrice()
  {
        if(this.listallsptrunggian.length>this.list_item.length)
        {
          this.list_item=this.listallsptrunggian
        }
        let listtamthoi:any[]=[];
        this.list_item.forEach(e=>{
          if(e.Gia<=this.giatriduocchon)
          {
            listtamthoi.push(e)
          }
        })
        this.list_item=listtamthoi;

    // if(Number(giamin)>0 && Number(giamax)>0)
    // {
    //   if(Number(giamax)<Number(giamin))
    //   {
    //     alert("gia")
    //   }
    //   else{
    //     let listtamthoi:any[]=[];
    //     this.list_item.forEach(e=>{
    //       if(e.Gia<=Number(giamax) && e.Gia>=Number(giamin))
    //       {
    //         listtamthoi.push(e)
    //       }
    //     })
    //     this.list_item=listtamthoi;
    //   }
    // }
    // else if(Number(giamin)==0 && Number(giamax)>0)
    // {
    //   let listtamthoi:any[]=[];
    //   this.list_item.forEach(e=>{
    //     if(e.Gia<=Number(giamax))
    //     {
    //       listtamthoi.push(e)
    //     }
    //   })
    //   this.list_item=listtamthoi;
    // }
    // else if(Number(giamin)>0 && Number(giamax)==0)
    // {
    //   let listtamthoi:any[]=[];
    //     this.list_item.forEach(e=>{
    //       if(e.Gia>=Number(giamin))
    //       {
    //         listtamthoi.push(e)
    //       }
    //     })
    //     this.list_item=listtamthoi;
    // }
  }
  ngAfterViewInit() {}
}
