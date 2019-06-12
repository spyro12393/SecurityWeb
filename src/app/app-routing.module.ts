import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { mainpage } from './mainpage/mainpage.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full'},
  // { path: 'mainpage', component: mainpage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
