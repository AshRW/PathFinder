import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridViewComponent } from './grid-view/grid-view.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CompareGridsComponent } from './compare-grids/compare-grids.component';

const routes: Routes = [
  {path:"gridview", component:GridViewComponent},
  {path:"compare", component:CompareGridsComponent},
  {path:"about", component:AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
