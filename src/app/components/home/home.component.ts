import { Component } from '@angular/core';
import { ShardHeaderComponent } from "../shard-header/shard-header.component";

@Component({
  selector: 'app-home',
  imports: [ShardHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
 path: string = "start Framework"
}
