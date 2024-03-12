import {inject, NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaperStocksComponent } from './components/paper-stocks/paper-stocks.component';
import { UserpanelComponent } from './components/userpanel/userpanel.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { CreateBankAccountComponent } from './components/create-bank-account/create-bank-account.component';
import { CreateBankProfileComponent } from './components/create-bank-profile/create-bank-profile.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { BankAccountMaskDirective } from './directives/bank-account-mask.directive';

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AlertInterceptor } from "./interceptors/alert.interceptor";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HomeComponent,
    PaperStocksComponent,
    UserpanelComponent,
    AdminpanelComponent,
    CreateBankAccountComponent,
    CreateBankProfileComponent,
    NavigationMenuComponent,
    BankAccountMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AlertInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
