import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ADashboardComponent } from './dashboard/a-dashboard/a-dashboard.component';
import { AccountingComponent } from './accounting/accounting.component';
import { PaymentComponent } from './payment/payment.component';
import { ReportingComponent } from './reporting/reporting.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'accounting',
    loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'reporting',
    loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
