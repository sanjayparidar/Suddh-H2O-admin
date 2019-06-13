import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ProductComponent, updateproductComponent, addproductComponent } from '../../product/product.component';
import { UserComponent } from '../../user/user.component';
import { OrderHistoryComponent } from '../../order-history/order-history.component';
import { ScheduleDeliveryHoursComponent } from '../../schedule-delivery-hours/schedule-delivery-hours.component';
import { SubscriptionListComponent } from '../../subscription-list/subscription-list.component';
import { WalletManageComponent } from '../../wallet-manage/wallet-manage.component';
import { RewardSystemComponent } from '../../reward-system/reward-system.component';
import { AppReferManageComponent } from '../../app-refer-manage/app-refer-manage.component';
import { PaymentHistoryComponent } from '../../payment-history/payment-history.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';



import { PromoComponent, updatepromoComponent, AddpromoComponent } from 'app/promo/promo.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    ProductComponent,
    UserComponent,
  
    OrderHistoryComponent,
    ScheduleDeliveryHoursComponent,
    SubscriptionListComponent,
    WalletManageComponent,
    RewardSystemComponent,
    AppReferManageComponent,
    PaymentHistoryComponent,
    addproductComponent,
    AddpromoComponent,
    PromoComponent,
    updateproductComponent,
    updatepromoComponent
  ]
})

export class AdminLayoutModule {}
