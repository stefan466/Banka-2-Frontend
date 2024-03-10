import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserpanelComponent } from './components/userpanel/userpanel.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { CreateBankAccountComponent } from './components/create-bank-account/create-bank-account.component';
import { CreateBankProfileComponent } from './components/create-bank-profile/create-bank-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AlertInterceptor} from "./interceptors/alert.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HomeComponent,
    UserpanelComponent,
    AdminpanelComponent,
    CreateBankAccountComponent,
    CreateBankProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AlertInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
