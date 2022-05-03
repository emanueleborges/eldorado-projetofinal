import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Paginas */
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { DeviceComponent } from './components/device/device.component';
import { DeviceCreateComponent } from './components/device/device-create/device-create.component';

/* Login */
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

/* Rotas */
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent , canActivate: [AuthGuard]},
  { path: 'category/create', component: CategoryCreateComponent , canActivate: [AuthGuard]},
  { path: 'device', component: DeviceComponent , canActivate: [AuthGuard]},
  { path: 'device/create', component: DeviceCreateComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
