import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfFamilyComponent } from './details-of-family.component';

describe('DetailsOfFamilyComponent', () => {
  let component: DetailsOfFamilyComponent;
  let fixture: ComponentFixture<DetailsOfFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
