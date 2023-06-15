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
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.scss']
})
export class TintucComponent   extends BaseComponent
implements OnInit, AfterViewInit {


  constructor(
    injector: Injector,
    private _api: ApiService,
    private http: HttpClient,
    public router: Router
  ) {
    super(injector);
  }

  public list_item: any;
  idtt: any = JSON.parse(localStorage.getItem('tintuc') || '{}');

  PhotoPath = environment.PHOTO_API;


  ngOnInit(): void {
    this._api
    .get('/api/TinTuc/idtintuc?idtintuc=' + this.idtt)
    .subscribe((res) => {
      this.list_item = res;
      console.log(this.list_item);

      setTimeout(() => {

      });
    });
  }
  ngAfterViewInit() {

  }
}
