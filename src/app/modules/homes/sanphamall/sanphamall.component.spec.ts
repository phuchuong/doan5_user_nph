import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamallComponent } from './sanphamall.component';

describe('SanphamallComponent', () => {
  let component: SanphamallComponent;
  let fixture: ComponentFixture<SanphamallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanphamallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanphamallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
