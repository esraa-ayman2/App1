import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShardHeaderComponent } from '../shard-header/shard-header.component';

@Component({
  selector: 'app-about',
  imports: [FormsModule, ShardHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  path:string ='about component';
}
