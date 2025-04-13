import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // ✅ Register plugin
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements AfterViewInit, OnDestroy {

  ngAfterViewInit() {

    gsap.utils.toArray('.feature-card').forEach((card: any, i: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
        opacity: 0,
        y: 50,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power2.out'
      });
    });

  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
