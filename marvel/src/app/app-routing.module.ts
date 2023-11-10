import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelNameComponent } from './marvel-name/marvel-name.component';

const routes: Routes = [
  {path:'marvel-name/:id', component: MarvelNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
