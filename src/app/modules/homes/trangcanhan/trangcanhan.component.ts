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
  selector: 'app-trangcanhan',
  templateUrl: './trangcanhan.component.html',
  styleUrls: ['./trangcanhan.component.scss']
})
export class TrangcanhanComponent implements OnInit {
  loadScripts: any;

  constructor(public router: Router) {}

  public a:any;

  ngOnInit(): void {
    this.a=this.laykhachhanglocal();
    console.log(this.a);

    setTimeout(() => {
      // this.loadScripts('  node_modules/bootstrap/dist/css/bootstrap.min.css');
    });
  }


  laykhachhanglocal(){
    return JSON.parse(localStorage.getItem("user"))
  }

  loguout(){
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
