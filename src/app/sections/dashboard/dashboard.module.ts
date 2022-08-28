import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { OrdersOverviewComponent } from './orders-overview/orders-overview.component';
import { PurchaseByCountryComponent } from './purchase-by-country/purchase-by-country.component';
import { BestSellerComponent } from './best-seller/best-seller.component';


@NgModule({
  declarations: [DashboardComponent, SalesReportComponent, OrdersOverviewComponent, PurchaseByCountryComponent, BestSellerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
