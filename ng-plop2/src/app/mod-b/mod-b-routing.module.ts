import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageBComponent} from './page-b/page-b.component';

const routes: Routes = [
  // {path: 'module-b', component: PageBComponent}
  {path: '', component: PageBComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModBRoutingModule {
}
