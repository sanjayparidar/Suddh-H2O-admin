import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardSystemComponent } from './reward-system.component';

describe('RewardSystemComponent', () => {
  let component: RewardSystemComponent;
  let fixture: ComponentFixture<RewardSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
