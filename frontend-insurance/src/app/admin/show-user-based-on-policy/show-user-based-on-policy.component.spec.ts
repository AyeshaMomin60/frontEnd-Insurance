import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserBasedOnPolicyComponent } from './show-user-based-on-policy.component';

describe('ShowUserBasedOnPolicyComponent', () => {
  let component: ShowUserBasedOnPolicyComponent;
  let fixture: ComponentFixture<ShowUserBasedOnPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserBasedOnPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserBasedOnPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
