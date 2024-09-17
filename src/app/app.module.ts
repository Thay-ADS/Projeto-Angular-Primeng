import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ScrollerModule } from 'primeng/scroller';


import { MenuModule } from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';


import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChartModule } from 'primeng/chart';
import { SplitterModule } from 'primeng/splitter';
import { PaginatorModule } from 'primeng/paginator';
import {ProductModule} from './product/product.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule ,
    InputTextModule,
    MenuModule,
    DropdownModule,
    ScrollerModule,
    ScrollPanelModule,
    ChartModule,
    SplitterModule,
    PaginatorModule,
    ProductModule,
    TableModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
