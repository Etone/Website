import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

const routes: Routes = [
  { path: "", component: MainPageContentComponent},
  { path: "blog", component: BlogComponent },
  { path: "projects", component: ProjectsComponent},
  { path: "aboutme", component: AboutmeComponent},
  { path: "impressum", component: ImpressumComponent},
  { path: "**", redirectTo: "", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    BlogComponent,
    FooterComponent,
    MainPageContentComponent,
    ProjectsComponent,
    AboutmeComponent,
    ImpressumComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
