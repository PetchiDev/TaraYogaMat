import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-gallery-collection',
  templateUrl: './gallery-collection.component.html',
  styleUrls: ['./gallery-collection.component.scss'],
})
export class GalleryCollectionComponent implements AfterViewInit {
  images: string[] = [
    './../../../../assets/Media (4).jpg',
    './../../../../assets/Media (5).jpg',
    './../../../../assets/Media (6).jpg',
    './../../../../assets/Media (7).jpg',
    './../../../../assets/Media (8).jpg',
    './../../../../assets/Media (9).jpg',
    './../../../../assets/Media (10).jpg',
    './../../../../assets/Media (11).jpg',
    './../../../../assets/Media (12).jpg',
  ];

  @ViewChildren('galleryItem', { read: ElementRef })
  galleryItems!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    gsap.from('.gallery-title', {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from('.underline', {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1,
      delay: 0.3,
      ease: 'power2.out',
    });

    gsap.from('.gallery-item', {
      scale: 0.8,
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'back.out(1.7)',
      stagger: 0.15,
      delay: 0.5,
    });
  }

}
