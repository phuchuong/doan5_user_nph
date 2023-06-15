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
  khachhang:any;
  sum = 0;
  PhotoPath = 'http://localhost:5093/Photos';

  ngOnInit(): void {


    console.log(JSON.parse(localStorage.getItem('listCart') || '{}'));
    // console.log(JSON.parse(localStorage.getItem('user') || '{}'));

    this.khachhang =JSON.parse(localStorage.getItem('user') || '{}');
    console.log('ư',this.khachhang)

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
  // laykhachhanglocal() {
  //   return JSON.parse(localStorage.getItem('user'));
  // }
  // public a: any;
  laykhachhanglocal() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // addkh() {
  //   // this.a = JSON.parse(localStorage.getItem('user'));
  //   let kh: any = {
  //     MaKH: 'KH' + this.RandomNumberkh(),
  //     TenKH: this.TenKH,
  //     Diachi: this.Diachi,
  //     SDT: this.SDT,
  //     Email: this.Email,
  //     Tendangnhap: '',
  //     Matkhau: '',
  //   };
  //   console.log(kh);
  //   this.httpservice.post('/api/KhachHang', kh).subscribe((data: any) => {});
  // }

  public laykhachhang: any;


  order() {
    if (localStorage.getItem('user')) {
      let listcart = JSON.parse(localStorage.getItem('listCart') || '{}');
      console.log(listcart);

      if (listcart == null) {
        alert('không còn sản phẩm trong giỏ hàng !');
      }
      else {

        // this.addkh(); lấy ra khách hàng trên loacl
        this.laykhachhang = this.laykhachhanglocal();
        // console.log('t',this.laykhachhang);

        let tongtienhdb = 0;
        listcart.forEach((e: any) => {
          tongtienhdb += e.TongTien;
        });

        // alert(this.laykhachhang.MaKH);
        let hdb: any = {
          MaHDB: 'HDB' + this.RandomNumberhdb(),
          NgayDat: new Date(this.today),
          ThanhTien: tongtienhdb,
          DiaChi: 'Hưng Yên',
          SDT: '0982738472',
          HoTen: 'Hưởng',
          GhiChu: this.ghichu,
          PhiVanChuyen: 0,
          TrangThai: 'đang chuẩn bị',
          MaKH: this.laykhachhang.MaKH,// gán khách hàng trên local thêm vào hóa đơn bán
          IDNV: 'nv01',
        };
        console.log(hdb);
        this.httpservice.post('/api/HoaDonBan', hdb).subscribe((data: any) => {});

        listcart.forEach((e: any) => {
          let cthdb: any = {
            MaCTHDB: 'CTHDB' + this.RandomNumber(),
            MaDT: e.MaDT,
            ThanhTien: e.TongTien,
            SoLuong: e.SoLuong,
            MaHDB: this.idhoadonbantamthoi,
          };
          // - đi số lượng
          this.httpservice.get('/api/DienThoai').subscribe((res) => {
            console.log(res);
            let objectDt = {
              MaDT: e.MaDT,
              TenDT: '',
              IDLoaiDT: '',
              AnhDT: 'no.npg',
              MoTa: '',
              Sale: 0,
              TenMS: '',
              SoLuong: e.SoLuong,
              Gia: 0,
            };
            res.forEach((element) => {
              if (element.MaDT == e.MaDT) {
                objectDt.SoLuong = element.SoLuong - e.SoLuong;
              }
            });
            console.log('f', objectDt);
            // const urlapi='/api/DienThoai/ChangeQuantityofDT/'+objectDt.MaDT.toString();
            // console.log(urlapi)
            this.httpservice.put('/api/DienThoai/ChangeQuantityofDT/' + objectDt.MaDT.toString(),objectDt)
              .subscribe((res) => {
                console.log(res);
              });
          });
//rrrrrrrrrrrrrrrrrrrrrrr
          console.log(cthdb);
          this.httpservice.post('/api/CTHDB', cthdb).subscribe((data: any) => {});

        });
        alert('Đặt hàng thành công !');
        localStorage.setItem('listCart', '');
        this.router.navigate(['/thongbao1']);
        alert('Mời bạn tiếp tục mua hàng');
      }
    }
    else {
      alert('bạn chưa đăng nhập, bạn cần đăng nhập để thanh toán');
      this.router.navigate(['/login']);
    }
  }
}
