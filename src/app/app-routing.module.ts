import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-area/user-area.module').then(mod => mod.UserAreaModule)
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: HomeComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }