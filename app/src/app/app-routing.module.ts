import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { OilColorComponent } from './works/oil-color/oil-color.component';
import { WaterColorComponent } from './works/water-color/water-color.component';
import { OutlineComponent } from './works/outline/outline.component';
import { OtherWorksComponent } from './works/other-works/other-works.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'works', component:WorksComponent},
  {path:'works/oilworks',component:OilColorComponent},
  {path:'works/waterworks',component:WaterColorComponent},
  {path:'works/outlineworks', component:OutlineComponent},
  {path:'works/otherworks',component:OtherWorksComponent},

  {path:'blog', component:BlogComponent},
  {path:'about', component:AboutComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
