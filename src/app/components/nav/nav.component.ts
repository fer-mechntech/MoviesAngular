import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import { Event } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  links = ['', 'Movies', 'Contact'];
  activeLink = this.links[0];
  currentRoute: string ='';

  constructor(private _router: Router) {
    this._router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
          console.log(this.currentRoute);
          this.changeView(this.currentRoute.replace('/',''));
      }
    });
   }

  ngOnInit(): void {

  }

  changeView(link: string): void{
    this.activeLink = link;
    this._router.navigateByUrl(link);
  }

}
