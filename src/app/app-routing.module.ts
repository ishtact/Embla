import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  { path: 'create-invoice', component: CreateInvoiceComponent },
  { path: '',   redirectTo: '/layout', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


 }
