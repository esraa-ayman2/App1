import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-shard-header',
  imports: [],
  templateUrl: './shard-header.component.html',
  styleUrl: './shard-header.component.css',
})
export class ShardHeaderComponent {
  @Input() word!: string;
   @Input() color!: string;

     @HostBinding('style.--line-color')
  get lineColor() {
    return this.color;
  }
}
