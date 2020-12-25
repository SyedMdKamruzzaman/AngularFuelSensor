import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpInterceptorService } from './helper/http-interceptor.service';
import { LoadingSpinner } from './components/spinner/loading.spinner.component';
import { NotificationService } from './helper/notification.service';
import { AuthGuard } from './helper/auth.guard';
import { TokenService } from './helper/token.service';

import { AuthService } from './services/auth.service';
import { CommonModule, DatePipe } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { OrderByPipe } from './helper/order-by.pipe';

import { AppUtilityService } from './helper/app-utility.service';


import { CsvUploadComponent } from './components/csv-upload/csv-upload.component';

import { DEFAULT_TIMEOUT, TimeoutInterceptor } from './helper/timeout-interceptor';

import {NgxPaginationModule} from 'ngx-pagination';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment';
import { ChartsModule } from 'ng2-charts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

import { ExcelService } from './services/excel.service';

import {NgxNotificationService, NgxNotificationModule} from 'ngx-notification';
import { ItemCategoryComponent } from './components/item-category/item-category.component';
import { ItemEntryComponent } from './components/item-entry/item-entry.component';
import { PartyEnteryComponent } from './components/party-entery/party-entery.component';
import { StockInComponent } from './components/stock-in/stock-in.component';
import { StockOutComponent } from './components/stock-out/stock-out.component';
import { ProductionInComponent } from './components/production-in/production-in.component';
import { ItemRegisterComponent } from './components/item-register/item-register.component';
import { PlanningDashboardComponent } from './components/planning-dashboard/planning-dashboard.component';
import { FuelConsumptionReportComponent } from './components/fuel-consumption-report/fuel-consumption-report.component';
import { RefuelingReportComponent } from './components/refueling-report/refueling-report.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ParameterSettingsComponent } from './components/parameter-settings/parameter-settings.component';
import { RefuelingReportDbComponent } from './components/refueling-report-db/refueling-report-db.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { MenuEntryComponent } from './components/menu-entry/menu-entry.component';
import { RoleEntryComponent } from './components/role-entry/role-entry.component';
import { RoleMenuAssignComponent } from './components/role-menu-assign/role-menu-assign.component';
import { ActionEntryComponent } from './components/action-entry/action-entry.component';
import { ShowMapComponent } from './components/show-map/show-map.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HomePageComponent,
    LoginComponent,
    DashboardComponent,
    LoadingSpinner,
    ViewUserComponent,
    OrderByPipe,
    CsvUploadComponent, 
    ChangePasswordComponent,
    ItemCategoryComponent, 
    ItemEntryComponent, 
    PartyEnteryComponent, 
    StockInComponent, 
    StockOutComponent, 
    ProductionInComponent, 
    ItemRegisterComponent, 
    PlanningDashboardComponent,  
    FuelConsumptionReportComponent, 
    RefuelingReportComponent, 
    ParameterSettingsComponent, 
    RefuelingReportDbComponent, 
    AddClientComponent, 
    AddVehicleComponent, 
    MenuEntryComponent, 
    RoleEntryComponent, 
    RoleMenuAssignComponent, 
    ActionEntryComponent, ShowMapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FullCalendarModule,
    NgbModule,
    NgxNotificationModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    MomentModule,
    ChartsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut:500,
      positionClass:'toast-bottom-right',
      preventDuplicates:false
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I'
    })
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
    { provide: DEFAULT_TIMEOUT, useValue: 3000000 },
    LoadingSpinner,
  
    AuthGuard,
  
    TokenService,
    AuthService,
    DatePipe,
    AppUtilityService,
    ExcelService,
    OrderByPipe
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
