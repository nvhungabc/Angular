import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinComponent } from './thongtin.component';

describe('ThongtinComponent', () => {
  let component: ThongtinComponent;
  let fixture: ComponentFixture<ThongtinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThongtinComponent]
    });
    fixture = TestBed.createComponent(ThongtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
