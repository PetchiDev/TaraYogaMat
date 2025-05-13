import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryPageComponent } from './Components/categories/category-page/category-page.component';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { AboutUsComponent } from './Components/Aboutus/about-us/about-us.component';
import { GalleryCollectionComponent } from './Components/gallery/gallery-collection/gallery-collection.component';
import { ComingSoonComponent } from './Components/comingSoon/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CategoryPageComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    GalleryCollectionComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
