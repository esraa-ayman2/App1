import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShardHeaderComponent } from '../shard-header/shard-header.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ShardHeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  path: string = 'portfolio component';

  portfolioItems = [
    { img: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png', alt: 'Cabin' },
    { img: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png', alt: 'Cake' },
    { img: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png', alt: 'Circus' },
    { img: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png', alt: 'Game' },
    { img: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png', alt: 'Safe' },
    { img: 'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png', alt: 'Submarine' }
  ];

  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
