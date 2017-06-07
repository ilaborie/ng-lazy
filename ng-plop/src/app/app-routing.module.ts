import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', children: []},
  {path: 'module-a', loadChildren: './mod-a/mod-a.module#ModAModule'},
  {path: 'module-b', loadChildren: './mod-b/mod-b.module#ModBModule'},
  {path: 'module-c', loadChildren: './mod-c/mod-c.module#ModCModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
