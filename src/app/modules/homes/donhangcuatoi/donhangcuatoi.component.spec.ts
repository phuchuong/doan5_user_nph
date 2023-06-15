import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonhangcuatoiComponent } from './donhangcuatoi.component';

describe('DonhangcuatoiComponent', () => {
  let component: DonhangcuatoiComponent;
  let fixture: ComponentFixture<DonhangcuatoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonhangcuatoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonhangcuatoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
