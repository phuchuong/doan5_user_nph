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
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donhangcuatoi',
  templateUrl: './donhangcuatoi.component.html',
  styleUrls: ['./donhangcuatoi.component.scss'],
})
export class DonhangcuatoiComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  constructor(
    injector: Injector,
    private _api: ApiService,
    private http: HttpClient,
    public router: Router
  ) {
    super(injector);
  }
  ngAfterViewInit() {}
  public list_item: any;
  public list_item_CTHDB: any;
  public list_item_DT: any;
  listDT:any[]=[];
  listCTHDB:any[]=[];

  PhotoPath = environment.PHOTO_API;

  public a: any;

  ngOnInit(): void {
    this.laydonhangcuatoi();
    console.log(this.a);
    console.log('d',this.list_item);

  }

  laykhachhanglocal() {
    return JSON.parse(localStorage.getItem('user'));
  }

  async laydonhangcuatoi() {
    try {
      this.a = this.laykhachhanglocal();
      const response = await this._api.get('/api/HoaDonBan/idkhachhang?idkh=' + this.a.MaKH).toPromise();
      this.list_item = response;
      console.log('list_item', this.list_item);

      // const uniqueMaDT = []; // Mảng để lưu trữ các giá trị i.MaDT duy nhất

      for (let j of this.list_item) {
        console.log('MaHDB', j.MaHDB);
        const res = await this._api.get('/api/CTHDB/mahdb?mahdb=' + j.MaHDB).toPromise();
        this.list_item_CTHDB = res;
        console.log('list_item_CTHDB', this.list_item_CTHDB);
        this.listCTHDB.push(this.list_item_CTHDB);
        console.log("------");
        for (let a of this.listCTHDB) {
          a.forEach(element => {
            this._api.get('/api/DienThoai/iddienthoai?iddienthoai=' + element.MaDT).subscribe(res=>{
              element.tendienthoai=res.TenDT;
              element.anhdienthoai=res.AnhDT;
              element.maudienthoai=res.TenMS;

              console.log(res);
            })
          });
        }
        console.log('listCTHDB', this.listCTHDB);

      }

    } catch (error) {
      console.error('Error:', error);
    }
  }
}
