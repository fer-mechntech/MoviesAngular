import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'Movies',
    component: MoviesComponent
  },
  {
    path: 'Contact',
    loadChildren:()=>import('./contact-form/contact-form.module').then(m=>m.ContactFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
