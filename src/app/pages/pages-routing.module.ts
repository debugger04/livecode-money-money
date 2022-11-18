import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
    },
    {
        path: 'articles',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }