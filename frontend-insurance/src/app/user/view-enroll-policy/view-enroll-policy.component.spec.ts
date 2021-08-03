import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnrollPolicyComponent } from './view-enroll-policy.component';

describe('ViewEnrollPolicyComponent', () => {
  let component: ViewEnrollPolicyComponent;
  let fixture: ComponentFixture<ViewEnrollPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEnrollPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEnrollPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
