import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowPolicyComponent } from './user-show-policy.component';

describe('UserShowPolicyComponent', () => {
  let component: UserShowPolicyComponent;
  let fixture: ComponentFixture<UserShowPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShowPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
