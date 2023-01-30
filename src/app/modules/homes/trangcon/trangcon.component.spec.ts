import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangconComponent } from './trangcon.component';

describe('TrangconComponent', () => {
  let component: TrangconComponent;
  let fixture: ComponentFixture<TrangconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrangconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
