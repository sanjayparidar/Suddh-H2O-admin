import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/product', title: 'Product',  icon: 'category', class: '' },
    { path: '/user', title: 'User Section',  icon: 'persons', class: '' },
    { path: '/promo', title: 'Coupon Code',  icon: 'control_camera', class: '' },
    { path: '/order-history', title: 'Order History',  icon: 'view_headline', class: '' },
    { path: '/schedule-delivery-hours', title: 'Schedule Delivery Hours',  icon: 'alarm', class: '' },
    { path: '/subscription-list', title: 'Subscription List',  icon: 'done_all', class: '' },
    { path: '/wallet-manage', title: 'Wallet Manage',  icon: 'lock_open', class: '' },
    { path: '/reward-system', title: 'Reward System',  icon: 'stars', class: '' },
    { path: '/app-refer-manage', title: 'App Refer Manage',  icon: 'touch_app', class: '' },
    { path: '/payment-history', title: 'Payment History',  icon: 'money', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
