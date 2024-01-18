import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'works', component:WorksComponent},
  {path:'blog', component:BlogComponent},
  {path:'about', component:AboutComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
