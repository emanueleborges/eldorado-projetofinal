import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeviceModule } from './device/device.module';
import { CoreModule } from './core/core.module';
import { NotFountComponent } from './core/component/not-found/not-found.component';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    DeviceModule,
    CategoryModule,
    CoreModule,
    RouterModule.forRoot([
    {
        path: '**',
        component: NotFountComponent,
    },
], {
    initialNavigation: 'enabled'
}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
