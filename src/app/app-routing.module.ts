import { Interpolation } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CarrerComponent } from './carrer/carrer.component';
import { ContactComponent } from './contact/contact.component';
import { AttributebindingComponent } from './databinding/attributebinding/attributebinding.component';
import { ClassbindingComponent } from './databinding/classbinding/classbinding.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { InterpolationbindingComponent } from './databinding/interpolationbinding/interpolationbinding.component';
import { PropertybindingComponent } from './databinding/propertybinding/propertybinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding/twowaybinding.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'brand',
    component:BrandComponent
  },
  {
    path:'ourteam',
    component:OurteamComponent
  },
  {
    path:'pressrelease',
    component:PressreleaseComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'carrer',
    component:CarrerComponent
  },
  {
    path:'franchise',
    component:FranchiseComponent
  },
  {
    path:'inter',
    component:InterpolationbindingComponent
  },
  {
    path:'property',
    component:PropertybindingComponent
  },
  {
    path:'class',
    component:ClassbindingComponent
  },
  {
    path:'attribute',
    component:AttributebindingComponent
  },
  {
    path:'event',
    component:EventbindingComponent
  },
  {
    path:'twoway',
    component:TwowaybindingComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
