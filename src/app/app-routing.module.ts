import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ExpertDetailPageComponent } from './pages/expert/expert-detail-page/expert-detail-page.component';
import { ExpertNewPageComponent } from './pages/expert/expert-new-page/expert-new-page.component';
import { ExpertPageComponent } from './pages/expert/expert-page/expert-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TagDetailPageComponent } from './pages/tag/tag-detail-page/tag-detail-page.component';
import { TagNewPageComponent } from './pages/tag/tag-new-page/tag-new-page.component';
import { TagPageComponent } from './pages/tag/tag-page/tag-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/login'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'experts',
    component: ExpertPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'experts/:id',
    component: ExpertDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'experts/new/expert',
    component: ExpertNewPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tags',
    component: TagPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tags/:id',
    component: TagDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tags/new/tag',
    component: TagNewPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
