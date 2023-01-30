import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.scss'],
})
export class ThanhtoanComponent implements OnInit {
  constructor(public router: Router, private httpservice: ApiService) {}

  sanpham: any;
  sum = 0;
  PhotoPath = 'http://localhost:5093/Photos';

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('listCart') || '{}'));
    this.sanpham = JSON.parse(localStorage.getItem('listCart') || '{}');
    for (let i of this.sanpham) {
      this.sum = this.sum + i.TongTien * i.SoLuong;
    }
  }

  // random mã
  RandomNumber() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  idhoadonbantamthoi = '';
  RandomNumberhdb() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.idhoadonbantamthoi = 'HDB' + randomNumber.toString();
    return randomNumber;
  }
  idkhtamthoi = '';
  RandomNumberkh() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.idkhtamthoi = 'KH' + randomNumber.toString();
    return randomNumber;
  }

  // khach hang
  TenKH = '';
  Diachi = '';
  SDT = '';
  Email = '';
  Tendangnhap = '';
  Matkhau = '';
  ghichu = '';
  //
  //get current date
  date = new Date();
  day = this.date.getDate().toString().padStart(2, '0');
  month = (this.date.getMonth() + 1).toString().padStart(2, '0');
  year = this.date.getFullYear();
  today = `${this.year}-${this.month}-${this.day}`;
  //
  addkh() {
    let kh: any = {
      MaKH: 'KH' + this.RandomNumberkh(),
      TenKH: this.TenKH,
      Diachi: this.Diachi,
      SDT: this.SDT,
      Email: this.Email,
      Tendangnhap: '',
      Matkhau: '',
    };
    console.log(kh);
    this.httpservice.post('/api/KhachHang', kh).subscribe((data: any) => {});
  }

  order() {
    let listcart = JSON.parse(localStorage.getItem('listCart') || '{}');
    console.log(listcart);
    
    if (listcart == null) {
      alert('không còn sản phẩm trong giỏ hàng !');
    } else {
      this.addkh();
      let tongtienhdb = 0;
      listcart.forEach((e: any) => {
        tongtienhdb += e.TongTien;
      });
      alert(this.idkhtamthoi);
      let hdb: any = {
        MaHDB: 'HDB' + this.RandomNumberhdb(),
        NgayDat: new Date(this.today),
        ThanhTien: tongtienhdb,
        DiaChi: 'Hưng Yên',
        SDT: '0982738472',
        HoTen: 'Hưởng',
        GhiChu: this.ghichu,
        PhiVanChuyen: 0,
        MaKH: this.idkhtamthoi,
      };
      console.log(hdb);
      this.httpservice.post('/api/HoaDonBan', hdb).subscribe((data: any) => {});
      listcart.forEach((e: any) => {
        let cthdb: any = {
          MaCTHDB: 'CTHDB' + this.RandomNumber(),
          MaSP: e.MaSP,
          ThanhTien: e.TongTien,
          SoLuong: e.SoLuong,
          MaHDB: this.idhoadonbantamthoi,
        };
        console.log(cthdb);
        this.httpservice.post('/api/CTHDB', cthdb).subscribe((data: any) => {});
      });
      alert('Đặt hàng thành công !');
      localStorage.setItem("listCart","");
      this.router.navigate(['/']);
      alert('Mời bạn tiếp tục mua hàng');

    }
  }
}
