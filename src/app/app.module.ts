import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { LayoutComponent } from './layout/layout.component';
import { SendInvoiceComponent } from './send-invoice/send-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateInvoiceComponent,
    LayoutComponent,
    SendInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
