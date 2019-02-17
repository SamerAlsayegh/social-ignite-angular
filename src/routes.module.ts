import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

// import { AuthModule } from './app/modules/auth/auth.module';



const routes: Routes = [
    // {
    //     path: 'hey',
    //     component: AuthModule
    // },
    // {
    //     path: 'profile',
    //     loadChildren: './profile/profile.module#ProfileModule'
    // },
    // {
    //     path: 'editor',
    //     loadChildren: './editor/editor.module#EditorModule'
    // },
    // {
    //     path: 'article',
    //     loadChildren: './article/article.module#ArticleModule'
    // }
];


@NgModule({
    // imports: [RouterModule.forRoot(routes, {
    //     // preload all modules; optionally we could
    //     // implement a custom preloading strategy for just some
    //     // of the modules (PRs welcome 😉)
    //     preloadingStrategy: PreloadAllModules
    // })],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
