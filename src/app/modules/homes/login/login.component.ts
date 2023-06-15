import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  Renderer2,
} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ApiService } from './../../../core/services/api.service';
import { BaseComponent } from 'src/app/core/common/base-component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  // list_login = {
  //   MaAdmin: null,
  //   TenAdmin: '',
  //   TenDangNhap: '',
  //   MatKhau: '',
  // };

  Tendangnhap: any;
  Matkhau: any;

  list_item: any;

  constructor(injector: Injector, private Api_NPH: ApiService) {
    super(injector);
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.showModal();
  }

  showModal() {
    this.Api_NPH.get('/api/KhachHang').subscribe((res) => {
      this.list_item = res;

      // const newArray = [...this.list_item];
      // // console.log('t', newArray);
      // // console.log('e', this.list_item);
      // newArray.forEach((element) => {
      //   return element;
      // });

      setTimeout(() => {
        this.loadScripts(
          // 'assets/js/hide_menu.js',
          // 'assets/js/slide_show.js',
          // 'assets/js/vendor.min.js',
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js '
        );
      });
    });
  }

  // getElements(): any {
  //   const newArray = [this.list_item];
  //   let result: any;

  //   newArray.forEach((element) => {
  //     result = element;
  //   });
  //   return result;
  // }
  check = false;
  dangnhap() {
    // this.showModal();
    // console.log('a',this.list_item[0].TenDangNhap);
    // console.log('b',this.MatKhau);

    // const elementsString = this.getElements();
    // console.log('s',elementsString);

    this.list_item.forEach((Element) => {
      if (
        this.Tendangnhap == Element.Tendangnhap &&
        this.Matkhau == Element.Matkhau
      ) {
        this.check = true;
        localStorage.setItem('user', JSON.stringify(Element));
        // localStorage.setItem('pw', Element.Matkhau);
        // localStorage.setItem('makh', this.list_item.makh);
        // this.Api_NPH.router.navigateByUrl('/thanhtoan');
      }
    });

    if (this.check == true) {
      this.Api_NPH.router.navigateByUrl('/');
    } else {
      alert('Tài khoản hoặc mật khẩu của bạn không chính xác');
    }
  }
}
