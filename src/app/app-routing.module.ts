import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { CategoryPageComponent } from './Components/categories/category-page/category-page.component';
import { AboutUsComponent } from './Components/Aboutus/about-us/about-us.component';
import { GalleryCollectionComponent } from './Components/gallery/gallery-collection/gallery-collection.component';
import { ComingSoonComponent } from './Components/comingSoon/coming-soon/coming-soon.component';

const routes: Routes = [

  { path: '', redirectTo: 'taraGreenYoga', pathMatch: 'full' },
  { path: 'taraGreenYoga', component: LandingPageComponent },
  { path: 'collections', component: CategoryPageComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'gallery', component: GalleryCollectionComponent },
  { path: 'comingSoon', component: ComingSoonComponent },
  { path: '**', redirectTo: 'comingSoon' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
