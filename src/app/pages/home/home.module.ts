import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { CommisionFeeComponent } from './components/commision-fee/commision-fee.component';
import { HomeComponent } from './home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { StepsComponent } from './components/steps/steps.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ProToolsComponent } from './components/pro-tools/pro-tools.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { KeyFeatComponent } from './components/key-feat/key-feat.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { BeginComponent } from './components/begin/begin.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HeroComponent,
    CommisionFeeComponent,
    HomeComponent,
    BenefitsComponent,
    StepsComponent,
    CompaniesComponent,
    ProToolsComponent,
    NotificationsComponent,
    KeyFeatComponent,
    FeaturedComponent,
    BeginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
