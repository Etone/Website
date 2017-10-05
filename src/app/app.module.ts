import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: "blog", component: BlogComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    BlogComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
