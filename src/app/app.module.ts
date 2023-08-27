import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrandComponent } from './brand/brand.component';
import { SliderComponent } from './slider/slider.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';
import { ContactComponent } from './contact/contact.component';
import { CarrerComponent } from './carrer/carrer.component';
import { PropertybindingComponent } from './databinding/propertybinding/propertybinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding/twowaybinding.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { AttributebindingComponent } from './databinding/attributebinding/attributebinding.component';
import { InterpolationbindingComponent } from './databinding/interpolationbinding/interpolationbinding.component';
import { StylebindingComponent } from './databinding/stylebinding/stylebinding.component';
import { ClassbindingComponent } from './databinding/classbinding/classbinding.component';
import { FormsModule } from '@angular/forms';
import { FranchiseComponent } from './franchise/franchise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    BrandComponent,
    SliderComponent,
    PagenotfoundComponent,
    OurteamComponent,
    PressreleaseComponent,
    ContactComponent,
    CarrerComponent,
    PropertybindingComponent,
    TwowaybindingComponent,
    EventbindingComponent,
    AttributebindingComponent,
    InterpolationbindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    FranchiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
