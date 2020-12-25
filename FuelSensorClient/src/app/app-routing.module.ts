

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AuthGuard } from './helper/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

import { CsvUploadComponent } from './components/csv-upload/csv-upload.component';


import { HomePageComponent } from './components/home-page/home-page.component';
import { RefuelingReportComponent } from './components/refueling-report/refueling-report.component';
import { RefuelingReportDbComponent } from './components/refueling-report-db/refueling-report-db.component';
import { FuelConsumptionReportComponent} from './components/fuel-consumption-report/fuel-consumption-report.component';
import { ParameterSettingsComponent } from './components/parameter-settings/parameter-settings.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { MenuEntryComponent } from './components/menu-entry/menu-entry.component';
import { RoleMenuAssignComponent } from './components/role-menu-assign/role-menu-assign.component';
import { RoleEntryComponent } from './components/role-entry/role-entry.component';
import { ActionEntryComponent } from './components/action-entry/action-entry.component';
import { ShowMapComponent } from './components/show-map/show-map.component';


const routes: Routes = [


    {path:'login', component:LoginComponent },
    { path: '', redirectTo:'home',pathMatch:'full' },
    { path: '', component: DashboardComponent, children: [
      { path: 'home', component:HomePageComponent,canActivate: [AuthGuard] },
        { path: 'add-user', component: AddUserComponent,canActivate: [AuthGuard] },
        { path: 'view-user', component: ViewUserComponent,canActivate: [AuthGuard] },
        { path: 'change-password', component: ChangePasswordComponent,canActivate: [AuthGuard] },
        {path:'home',component:HomePageComponent,canActivate: [AuthGuard] },
        {path:'csv-upload',component:CsvUploadComponent,canActivate: [AuthGuard] },
        {path:'refueling-report',component:RefuelingReportComponent,canActivate: [AuthGuard] },
        {path:'refueling-report-db',component:RefuelingReportDbComponent,canActivate: [AuthGuard] },
        {path:'fuel-consumption-report',component:FuelConsumptionReportComponent,canActivate: [AuthGuard] },
        {path: 'parameter-settings',component:ParameterSettingsComponent,canActivate: [AuthGuard] },
        {path: 'add-client',component:AddClientComponent,canActivate: [AuthGuard] },
        {path: 'add-vehicle',component:AddVehicleComponent,canActivate: [AuthGuard] },
        {path: 'menu-entry',component:MenuEntryComponent,canActivate: [AuthGuard] },
        {path: 'assign-menu-role',component:RoleMenuAssignComponent,canActivate: [AuthGuard] },
        {path: 'role-entry',component:RoleEntryComponent,canActivate: [AuthGuard] },
        {path: 'action-entry',component:ActionEntryComponent,canActivate: [AuthGuard] },
        {path: 'show-map',component:ShowMapComponent }

        
    ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
