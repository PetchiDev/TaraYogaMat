import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { CategoryPageComponent } from './Components/categories/category-page/category-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'taraGreenYoga', pathMatch: 'full' },
  { path: 'taraGreenYoga', component: LandingPageComponent },
  { path: 'categories', component: CategoryPageComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
