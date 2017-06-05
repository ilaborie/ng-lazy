import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageAComponent} from './page-a/page-a.component';

const routes: Routes = [
  {path: 'module-a', component: PageAComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModARoutingModule {
}
