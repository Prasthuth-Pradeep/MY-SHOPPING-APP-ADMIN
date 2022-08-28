import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SalesReportComponent } from 'src/app/sections/dashboard/sales-report/sales-report.component';
import { OrdersOverviewComponent } from './orders-overview/orders-overview.component';
import { PurchaseByCountryComponent } from './purchase-by-country/purchase-by-country.component';


@NgModule({
  declarations: [DashboardComponent, SalesReportComponent, OrdersOverviewComponent, PurchaseByCountryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
