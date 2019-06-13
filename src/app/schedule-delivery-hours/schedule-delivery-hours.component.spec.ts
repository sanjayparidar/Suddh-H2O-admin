import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDeliveryHoursComponent } from './schedule-delivery-hours.component';

describe('ScheduleDeliveryHoursComponent', () => {
  let component: ScheduleDeliveryHoursComponent;
  let fixture: ComponentFixture<ScheduleDeliveryHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDeliveryHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDeliveryHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
