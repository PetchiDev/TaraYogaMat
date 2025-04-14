import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../../Footer/footer/footer.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  scrollToContact() {
    setTimeout(() => {
      const element = document.getElementById('contactSection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // small delay to wait for DOM render if needed
  }


}
