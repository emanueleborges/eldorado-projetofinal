import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { CategoryComponent } from './components/category/category.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';

import { DeviceComponent } from './components/device/device.component';
import { DeviceCreateComponent } from './components/device/device-create/device-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    DeviceComponent,
    CategoryCreateComponent,
    DeviceCreateComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
