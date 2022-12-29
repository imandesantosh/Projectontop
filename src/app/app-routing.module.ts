import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { PayoutComponent } from './pages/payout/payout.component';
import { TimeComponent } from './pages/time/time.component';

const routes: Routes = [
  {
    path: '',
    component: ContractsComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'payout',
    component: PayoutComponent
  },
  {
    path: 'time',
    component: TimeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
