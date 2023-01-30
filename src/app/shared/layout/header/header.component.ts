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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent implements OnInit, AfterViewInit
{
  public list_item: any;
  listCart: any = [];
  cart1 = {
    MaSP: '',
    TenSP: '',
    AnhSP: '',
    TenMS: '',
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
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this._api.get('/api/SanPham').subscribe((res) => {
      this.list_item = res;
      console.log(this.list_item);
      setTimeout(() => {
        this.loadScripts(
          'assets/js/hide_menu.js',
          'assets/js/slide_show.js',

        );
      });
    });
  }
  move() {
    this.router.navigate(['']);
  }

  loaisanpham(s: any) {
    // console.log(s);
    if (
      localStorage.getItem('id') == null ||
      localStorage.getItem('id') == ''
    )
    {
      localStorage.setItem('id', JSON.stringify(s));
    }
    else {
      localStorage.setItem('id', JSON.stringify(s));
      // location.reload();

    }

    console.log(localStorage.getItem('id'));

    this.router.navigate(['/trangcon']);
      // location.reload();


  }
}
