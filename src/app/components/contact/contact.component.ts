import { Component } from '@angular/core';
import { ShardHeaderComponent } from '../shard-header/shard-header.component';

@Component({
  selector: 'app-contact',
  imports: [ShardHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
path:string = "conatct section";
}
