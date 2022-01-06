import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDocsComponent } from './customer-docs.component';

describe('CustomerDocsComponent', () => {
  let component: CustomerDocsComponent;
  let fixture: ComponentFixture<CustomerDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
