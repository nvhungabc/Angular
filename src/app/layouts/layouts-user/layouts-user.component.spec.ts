import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsUserComponent } from './layouts-user.component';

describe('LayoutsUserComponent', () => {
  let component: LayoutsUserComponent;
  let fixture: ComponentFixture<LayoutsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutsUserComponent]
    });
    fixture = TestBed.createComponent(LayoutsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
