import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @ViewChild('contactSection') contactSection!: ElementRef;

  public scrollIntoView() {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  //////////////Footer/////////////
  currentYear: number = new Date().getFullYear();
  contactInfo = {
    phone: '+91 7200658765',
    email: 'business@tgyexportenterprise.com',
    location: 'Chennai, India'
  };

  footerLinks = {
    firstColumn: [
      { title: 'Who We Are', url: '/aboutUs' },
      { title: 'Careers', url: '/careers' },
      { title: 'Contact Us', url: '/contact' },
      { title: 'Help', url: '/help' }
    ],
    secondColumn: [
      { title: 'Help', },
      { title: 'Support', },
      { title: 'Terms & Conditions', },
      { title: 'Fair Use Policy', }
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
