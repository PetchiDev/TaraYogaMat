import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
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
export class LandingPageComponent implements AfterViewInit, OnDestroy {

  constructor(private readonly formBuilder: FormBuilder, private readonly route: Router, private el: ElementRef) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      message: ['', Validators.required]
    });
    gsap.registerPlugin(ScrollTrigger);

  }


  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroSubtitle') heroSubtitle!: ElementRef;
  @ViewChild('heroButton') heroButton!: ElementRef;



  ngAfterViewInit() {
    ScrollTrigger.refresh();

    // 🧘 Hero Section
    gsap.from('.hero-title', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
    });

    gsap.from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: 'power3.out'
    });

    gsap.from('.hero-btn', {
      scale: 0,
      opacity: 0,
      delay: 0.7,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });

    // 🌿 Yoga Heading + Image fade-in on scroll both directions
    gsap.from('.heading-section p', {
      scrollTrigger: {
        trigger: '.heading-section p',
        start: 'top 80%',
        toggleActions: 'play reverse play reverse'
      },
      x: -100,
      opacity: 0,
      duration: 1
    });

    gsap.utils.toArray('.yoga-image').forEach((img: any, i) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          toggleActions: 'play reverse play reverse'
        },
        y: 100,
        opacity: 0,
        rotate: i % 2 === 0 ? 5 : -5,
        duration: 1,
        ease: 'power2.out'
      });
    });

    // 🧘‍♂️ Mat Card Scroll in
    gsap.utils.toArray('.mat-card').forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        },
        y: 50,
        scale: 0.95,
        opacity: 0,
        delay: i * 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    // 📚 Related Articles Card animation
    gsap.utils.toArray('.article-card').forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play reverse play reverse'
        },
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    // 📨 Help Contact Animations
    gsap.from('.help-title', {
      scrollTrigger: {
        trigger: '.help-title',
        start: 'top 85%',
        toggleActions: 'play reverse play reverse'
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });

    gsap.from('.help-subtitle', {
      scrollTrigger: {
        trigger: '.help-subtitle',
        start: 'top 85%',
        toggleActions: 'play reverse play reverse'
      },
      x: 100,
      opacity: 0,
      duration: 1
    });

    gsap.utils.toArray('.contact-form .form-group').forEach((form: any, index: number) => {
      gsap.from(form, {
        scrollTrigger: {
          trigger: form,
          start: 'top 90%',
          toggleActions: 'play reverse play reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: index * 0.15,
        ease: 'power2.out'
      });
    });

    // 🌈 Extra creative parallax image floating (hero image or big banners)
    gsap.to('.hero-section', {
      backgroundPosition: '50% 100%',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }

  contactForm: FormGroup;
  submitted = false;



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
    this.route.navigate(['/collections']);
  }
  ngOnDestroy() {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

}
