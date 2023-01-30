import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(    public router: Router) { }

  ngOnInit(): void {
  }
  loaisanpham(s: any) {
    // console.log(s);
    if (
      localStorage.getItem('id') == null ||
      localStorage.getItem('id') == ''
    ) {
      localStorage.setItem('id', JSON.stringify(s));
    } else {
      localStorage.setItem('id', JSON.stringify(s));
      // location.reload();
    }
    console.log(localStorage.getItem('id'));

    this.router.navigate(['/trangcon']);
  }
}
