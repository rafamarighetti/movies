import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './pages/default/default.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: "movies", component: DefaultComponent },
  { path: "movies/:id", component: MovieInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
