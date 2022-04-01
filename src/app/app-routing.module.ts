import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItembarComponent } from './itembar/itembar.component';

const routes: Routes = [
  {
    path: '',
    component: ItembarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
