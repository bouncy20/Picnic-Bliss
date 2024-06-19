import { Component } from '@angular/core';
import { faCaretDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  public faqs = [
    {
      title: 'How do I place an order?',
      content: 'To place an order, browse our website, select the items you wish to purchase, and proceed to checkout. Follow the on-screen instructions to complete your order.',
      active: false
    },
    {
      title: 'Can I cancel or change my order?',
      content: 'Currently, you cannot cancel or change orders after they are placed. However, we are considering adding this feature in the future.',
      active: false
    },
    {
      title: 'What payment methods do you accept?',
      content: 'We currently accept PayPal. Please use the test login and password provided in the repository\'s README for transactions.',
      active: false
    },
    {
      title: 'How do I provide my address?',
      content: 'We use Leaflet for our order map. Simply click on "Find my location," and we will automatically detect your address.',
      active: false
    }
  ];


  public faCarretDown = faCaretDown;
  public faCarretLeft = faCaretLeft;

  public toggleFaq(index: number): void {
    this.faqs[index].active = !this.faqs[index].active;

    this.faqs.forEach((faq, i) => {
      if (i !== index) {
        faq.active = false;
      }
    });
  }
}
