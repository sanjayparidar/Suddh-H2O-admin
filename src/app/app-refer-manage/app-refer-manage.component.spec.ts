import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReferManageComponent } from './app-refer-manage.component';

describe('AppReferManageComponent', () => {
  let component: AppReferManageComponent;
  let fixture: ComponentFixture<AppReferManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppReferManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReferManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
