import { Component } from '@angular/core';

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

export class CategoryPageComponent {

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
}
