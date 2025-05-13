import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.to('#comingText', {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.5
    });
  }
}