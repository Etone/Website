import { Component, OnInit } from '@angular/core';
import { MenuEntry } from "../../data/menu-entry";



@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent {
  entries = [
    { label: "Blog", linkTarget: "/blog" },
    { label: "About Me", linkTarget: "/aboutme" },
    { label: "Projects", linkTarget: "/projects" },
    { label: "CV", linkTarget: "/resume"}
  ];
  title = "Corvin Schapöhler";
}
