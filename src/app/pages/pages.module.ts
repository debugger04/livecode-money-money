import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { PageRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PageRoutingModule
  ]
})
export class PagesModule { }
