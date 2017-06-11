import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomPreloader} from './custom.preloader';

const routes: Routes = [
  {path: '', children: []},
  {path: 'module-a', loadChildren: './mod-a/mod-a.module#ModAModule', data: {preload: true, delay: 1000}},
  {path: 'module-b', loadChildren: './mod-b/mod-b.module#ModBModule'},
  {path: 'module-c', loadChildren: './mod-c/mod-c.module#ModCModule', data: {preload: true}}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: CustomPreloader
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
