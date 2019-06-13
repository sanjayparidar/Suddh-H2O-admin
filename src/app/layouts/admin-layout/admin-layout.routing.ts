import { Routes } from '@angular/router';

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



import { PromoComponent, updatepromoComponent, AddpromoComponent } from 'app/promo/promo.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'product',        component: ProductComponent },
    { path: 'user',        component: UserComponent },
   
    { path: 'order-history',        component: OrderHistoryComponent },
    { path: 'schedule-delivery-hours',        component: ScheduleDeliveryHoursComponent },
    { path: 'subscription-list',        component: SubscriptionListComponent },
    { path: 'wallet-manage',        component: WalletManageComponent },
    { path: 'reward-system',        component: RewardSystemComponent },
    { path: 'app-refer-manage',        component: AppReferManageComponent },
    { path: 'payment-history',        component: PaymentHistoryComponent },
    {path: "addproduct",  component:addproductComponent},
    {path: "promo", component:PromoComponent},
    {path:"addpromo",component:AddpromoComponent},
    {path:'updateproduct/:id',component:updateproductComponent},
    {path:'updatepromo/:id',component:updatepromoComponent}
];
