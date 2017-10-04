import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { BlogDisplayComponent } from './components/blog-display/blog-display.component';

const routes: Routes = [
  { path: "blog", component: BlogDisplayComponent },
  { path: "**", component: BlogDisplayComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    BlogDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
