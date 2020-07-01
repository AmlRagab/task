import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActionComponent } from './action/action.component';
import { FeaturesComponent } from './features/features.component';
import { FVedioComponent } from './f-vedio/f-vedio.component';
import { PriceComponent } from './price/price.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    PortfolioComponent,
    GalleryComponent,
    ActionComponent,
    FeaturesComponent,
    FVedioComponent,
    PriceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
