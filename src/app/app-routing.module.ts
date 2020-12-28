import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuSectionComponent} from './menu-section/menu-section.component';
import { LoginComponent } from './login/login.component';
import {IndexComponent} from './index/index.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
