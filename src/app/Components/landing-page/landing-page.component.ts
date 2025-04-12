import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import anime from 'animejs/lib/anime.min.js'; // ✅ Correct import

interface YogaMat {
  id: number;
  name: string;
  color: string;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  contactForm: FormGroup;
  submitted = false;

  constructor(private readonly formBuilder: FormBuilder, private readonly route: Router) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      // Here you would handle form submission to your backend
      console.log('Form submitted:', this.contactForm.value);
      // Reset form after submission
      this.contactForm.reset();
      this.submitted = false;
    }
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


  //////////////Footer/////////////
  currentYear: number = new Date().getFullYear();
  contactInfo = {
    phone: '+91 96006 58765',
    email: 'Prasannabalaji@Gmail.com',
    location: 'Chennai, India'
  };

  footerLinks = {
    firstColumn: [
      { title: 'About', url: '/about' },
      { title: 'Who We Are', url: '/who-we-are' },
      { title: 'Careers', url: '/careers' },
      { title: 'Contact Us', url: '/contact' },
      { title: 'Help', url: '/help' }
    ],
    secondColumn: [
      { title: 'Help', url: '/help' },
      { title: 'Support', url: '/support' },
      { title: 'Terms & Conditions', url: '/terms' },
      { title: 'Cookies', url: '/cookies' },
      { title: 'Fair Use Policy', url: '/fair-use-policy' }
    ]
  };

  socialMedia = [
    { name: 'LinkedIn', icon: 'bi bi-linkedin', url: '#' },
    { name: 'Pinterest', icon: 'bi bi-pinterest', url: '#' },
    { name: 'Facebook', icon: 'bi bi-facebook', url: '#' },
    { name: 'Instagram', icon: 'bi bi-instagram', url: '#' },
    { name: 'YouTube', icon: 'bi bi-youtube', url: '#' },
    { name: 'Twitter', icon: 'bi bi-twitter-x', url: '#' }
  ];



  routeCategory() {
    this.route.navigate(['/categories']);
  }


}
