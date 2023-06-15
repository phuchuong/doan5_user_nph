import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangcanhanComponent } from './trangcanhan.component';

describe('TrangcanhanComponent', () => {
  let component: TrangcanhanComponent;
  let fixture: ComponentFixture<TrangcanhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangcanhanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrangcanhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
