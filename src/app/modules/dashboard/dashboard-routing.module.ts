import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@/core';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      id: 'dashboard',
      title: 'Dashboard',
      icon: 'heroChartBarSolid',
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
})
export class DashboardRoutingModule {}
