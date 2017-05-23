import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page1Component} from 'app/page1/page1.component';
import {Page2Component} from 'app/page2/page2.component';

const routes: Routes = [
  {path: '', redirectTo: '/page1', pathMatch: 'full'},
  {path: 'page1', component: Page1Component},
  {path: 'page2/a/b/c/d', component: Page2Component},
  {path: '**', redirectTo: '/page1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
