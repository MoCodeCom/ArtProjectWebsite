import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { OilColorComponent } from './works/oil-color/oil-color.component';
import { WaterColorComponent } from './works/water-color/water-color.component';
import { OutlineComponent } from './works/outline/outline.component';
import { OtherWorksComponent } from './works/other-works/other-works.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    OilColorComponent,
    WaterColorComponent,
    OutlineComponent,
    OtherWorksComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
