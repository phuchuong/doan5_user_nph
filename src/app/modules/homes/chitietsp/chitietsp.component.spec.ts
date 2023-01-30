import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietspComponent } from './chitietsp.component';

describe('ChitietspComponent', () => {
  let component: ChitietspComponent;
  let fixture: ComponentFixture<ChitietspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitietspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
