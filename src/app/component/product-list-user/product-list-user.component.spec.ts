import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListUserComponent } from './product-list-user.component';

describe('ProductListUserComponent', () => {
  let component: ProductListUserComponent;
  let fixture: ComponentFixture<ProductListUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListUserComponent]
    });
    fixture = TestBed.createComponent(ProductListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
