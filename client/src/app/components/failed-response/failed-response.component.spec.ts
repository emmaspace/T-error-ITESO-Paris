import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedResponseComponent } from './failed-response.component';

describe('FailedResponseComponent', () => {
  let component: FailedResponseComponent;
  let fixture: ComponentFixture<FailedResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
