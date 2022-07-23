import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedResponseComponent } from './approved-response.component';

describe('ApprovedResponseComponent', () => {
  let component: ApprovedResponseComponent;
  let fixture: ComponentFixture<ApprovedResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
