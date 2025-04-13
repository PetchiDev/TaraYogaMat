import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Refresh ScrollTrigger after navigation
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500); // Give some time for new DOM to load
      }
    });
  }
}
