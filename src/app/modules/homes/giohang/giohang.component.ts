import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.scss']
})
export class GiohangComponent implements OnInit {

  constructor(public router:Router) { }
  sanpham:any;
  sum=0;
  PhotoPath="http://localhost:5093/Photos";

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('listCart')||'{}'));
    this.sanpham=JSON.parse(localStorage.getItem('listCart')||'{}');
    for(let i of this.sanpham){
      this.sum=this.sum + i.TongTien*i.SoLuong;
    }
  }

  deleteProduct(index:any){
    this.sanpham.splice(index,1);
    localStorage.setItem('listCart',JSON.stringify(this.sanpham));
    this.sanpham=JSON.parse(localStorage.getItem('listCart')||'{}');
    if(this.sanpham==''){
      this.sum=0;
      this.router.navigate(['']);
    }
    else{
      this.sum=0;
      for(let i of this.sanpham){
        this.sum+=i.TongTien*i.SoLuong;
      }
    }
  }
  Giam(list:any){
    for(let i of this.sanpham){
      if(i.MaDT==list.MaDT){
        if(i.SoLuong==1){
          break;
        }
        else{
          i.SoLuong--;
          break;
        }
      }
    }
    this.sum=0;
      for(let i of this.sanpham){
        this.sum=this.sum + i.TongTien*i.SoLuong;
      }
      localStorage.setItem('listCart',JSON.stringify(this.sanpham));

  }

  Tang(list:any){
    for(let i of this.sanpham){
      if(i.MaDT==list.MaDT){
          i.SoLuong++;
          break;
        }
    }
    this.sum=0;
    for(let i of this.sanpham){
      this.sum=this.sum + i.TongTien*i.SoLuong;
    }
    localStorage.setItem('listCart',JSON.stringify(this.sanpham));

  }


}


