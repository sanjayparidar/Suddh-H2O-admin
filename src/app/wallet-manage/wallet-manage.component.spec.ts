import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletManageComponent } from './wallet-manage.component';

describe('WalletManageComponent', () => {
  let component: WalletManageComponent;
  let fixture: ComponentFixture<WalletManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
