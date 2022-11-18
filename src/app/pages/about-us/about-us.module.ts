import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { VisiMisiComponent } from './components/visi-misi/visi-misi.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './about-us.component';
import { AboutRoutingModule } from './about-us-routing.module';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    AboutComponent,
    VisiMisiComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutRoutingModule
  ]
})
export class AboutUsModule { }
