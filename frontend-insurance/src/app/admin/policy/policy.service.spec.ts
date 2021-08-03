import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyService } from './policy.service';

describe('PolicyComponent', () => {
  let component: PolicyService ;
  let fixture: ComponentFixture<PolicyService >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyService  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyService );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
