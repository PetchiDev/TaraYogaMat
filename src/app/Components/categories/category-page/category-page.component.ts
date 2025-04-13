import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // ✅ Register plugin
interface YogaMat {
  id: number;
  name: string;
  color: string;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})

export class CategoryPageComponent implements AfterViewInit {

  // Define color-based image sets
  imageSets: { [key: string]: string[] } = {
    '#a53e3e': [
      'assets/RedMat.png',
      'assets/RedMat.png',
      'assets/RedMat.png',
      'assets/RedMat.png',
      'assets/RedMat.png'
    ],
    '#1e2e4d': [
      'assets/BlueMat.png',
      'assets/BlueMat.png',
      'assets/BlueMat.png',
      'assets/BlueMat.png',
      'assets/BlueMat.png'
    ]
  };

  selectedImageIndex = 0;

  colors: string[] = ['#a53e3e', '#1e2e4d'];
  selectedColor = this.colors[0];
  quantity = 1;
  // Getter to use the current color's image set
  get images(): string[] {
    return this.imageSets[this.selectedColor] || [];
  }

  // Change selected color and reset image index
  selectColor(color: string) {
    this.selectedColor = color;
    this.selectedImageIndex = 0;
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  prevImage() {
    this.selectedImageIndex = (this.selectedImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
  }

  yogaMats: YogaMat[] = [
    {
      id: 1,
      name: 'Cotton Yoga Mat',
      color: 'Dazzling Midnight',
      rating: 4.3,
      image: './../../../assets/RedMat.png'
    },
    {
      id: 2,
      name: 'Cotton Yoga Mat',
      color: 'Azure Win',
      rating: 4.3,
      image: './../../../assets/BlueMat.png'
    },
    {
      id: 3,
      name: 'Cotton Yoga Mat',
      color: 'Golden Olive',
      rating: 4.3,
      image: './../../../assets/RedMat.png'
    },
    {
      id: 4,
      name: 'Cotton Yoga Mat',
      color: 'Dazzling Midnight',
      rating: 4.3,
      image: './../../../assets/RedMat.png'
    },
    {
      id: 5,
      name: 'Cotton Yoga Mat',
      color: 'Azure Win',
      rating: 4.3,
      image: './../../../assets/BlueMat.png'
    },
    {
      id: 6,
      name: 'Cotton Yoga Mat',
      color: 'Golden Olive',
      rating: 4.3,
      image: './../../../assets/RedMat.png'
    }
  ];

  childYogaMats: YogaMat[] = [
    {
      id: 1,
      name: 'Cotton Yoga Mat',
      color: 'Blush Moss',
      rating: 4.3,
      image: './../../../assets/RedMat.png'
    },
    {
      id: 2,
      name: 'Cotton Yoga Mat',
      color: 'Dazzling',
      rating: 4.3,
      image: './../../../assets/BlueMat.png'
    },
    {
      id: 3,
      name: 'Cotton Yoga Mat',
      color: 'Blush Moss',
      rating: 4.3,
      image: './../../../assets/RedMat.png'
    }
  ];

  showAll = false;


  ngAfterViewInit(): void {
    gsap.utils.toArray('.tilt-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        },
        y: 100,
        opacity: 0,
        scale: 0.95,
        rotate: index % 2 === 0 ? -2 : 2,
        duration: 1,
        ease: 'power4.out'
      });
    });
  }

  // 🌀 3D Hover Effect Methods
  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  }

  onMouseLeave(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  }


}
