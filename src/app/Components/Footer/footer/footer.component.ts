import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {



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

}
