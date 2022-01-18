import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFomrComponent } from './address-fomr.component';

describe('AddressFomrComponent', () => {
  let component: AddressFomrComponent;
  let fixture: ComponentFixture<AddressFomrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFomrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
