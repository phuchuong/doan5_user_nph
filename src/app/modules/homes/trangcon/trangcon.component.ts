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
  selector: 'app-trangcon',
  templateUrl: './trangcon.component.html',
  styleUrls: ['./trangcon.component.scss'],
})
export class TrangconComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  public list_item: any;
  id: any = JSON.parse(localStorage.getItem('id') || '{}');

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

  constructor(
    injector: Injector,
    private _api: ApiService,
    private http: HttpClient,
    public router: Router
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._api
      .get('/api/DienThoai/loaidienthoai?loaidienthoai=' + this.id)
      .subscribe((res) => {
        this.list_item = res;
        console.log(this.list_item);
        setTimeout(() => {
          this.loadScripts(
            'assets/js/hide_menu.js',
            'assets/js/slide_show.js',
            'assets/catalog/view/javascript/common.js',
            'assets/catalog/view/javascript/webdigify/custom.js',
            'assets/sanphamcon.js'
          );
        });
      });
  }

  changge() {
    setTimeout(() => {
      this.loadScripts(
        'assets/js/hide_menu.js',
        'assets/js/slide_show.js',
        'assets/catalog/view/javascript/common.js',
        'assets/catalog/view/javascript/webdigify/custom.js',
        'assets/sanphamcon.js'
      );
    });
  }
  loaisanpham(s: any) {
    if (
      localStorage.getItem('id') == null ||
      localStorage.getItem('id') == ''
    ) {
      localStorage.setItem('id', JSON.stringify(s));
    } else {
      localStorage.setItem('id', JSON.stringify(s));
    }
    console.log(localStorage.getItem('id'));
    this.router.navigate(['trangcon']);

  }

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
    this.cart.MaDT = list.MaDT;
    this.cart.TenDT = list.TenDT;
    this.cart.IDLoaiDT=list.IDLoaiDT;
    this.cart.AnhDT = list.AnhDT;
    this.cart.TenMS = list.TenMS;
    // this.cart.SoLuong = list.SoLuong;
    this.cart.Sale=list.Sale;
    this.cart.Gia = list.Gia;
    this.cart.TongTien = (list.Gia * (100 - list.Sale)) / 100;

    let check = true;
    if (
      localStorage.getItem('listCart') == null ||
      localStorage.getItem('listCart') == ''
    ) {
      this.listCart.unshift(this.cart);
      localStorage.setItem('listCart', JSON.stringify(this.listCart));
    } else {
      var list = JSON.parse(localStorage.getItem('listCart') || '{}');
      for (let i = 0; i < list.length; i++) {
        if (list[i].MaDT == this.cart.MaDT) {
          list[i].SoLuong = list[i].SoLuong + 1;
          this.listCart = list;
          localStorage.setItem('listCart', JSON.stringify(this.listCart));
          check = false;
          break;
        }
      }
      if (check) {
        this.listCart = JSON.parse(localStorage.getItem('listCart') || '{}');
        this.listCart.unshift(this.cart);
        localStorage.setItem('listCart', JSON.stringify(this.listCart));
      }
    }
    console.log(this.listCart);
    this.router.navigate(['giohang']);
  }
  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.loadScripts(
    //     'assets/js/hide_menu.js',
    //     'assets/js/slide_show.js',
    //     'assets/catalog/view/javascript/common.js',
    //     'assets/catalog/view/javascript/webdigify/custom.js',
    //     'assets/sanphamcon.js'
    //   );
    // });
  }
}
