import { NgModule } from '@angular/core';
// Routing
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';

const appRoutes: Routes = [
  { path: '', component: ExampleComponent },

  /*

Lazy Loading Feature Module
Utilizing lazy load the modules can enhance your productivity. 
Lazy Load is a built-in feature in Angular which helps developers 
with loading the thing which is required. For example, when you use the feature, 
it loads the components and other things you needed 
and stops other and unnecessary files to get loaded. 

*/

  {
    path: 'lazy-load',
    loadChildren: 'lazy-load.module#LazyLoadModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
