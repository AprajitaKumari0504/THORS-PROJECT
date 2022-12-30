import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
  {path:'widget',component:WidgetComponent},
  {path:'component',component:ComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
