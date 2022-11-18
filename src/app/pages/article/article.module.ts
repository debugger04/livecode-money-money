import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { RouterModule } from "@angular/router";
import { ArticleRoutingModule } from './article-routing.module';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
