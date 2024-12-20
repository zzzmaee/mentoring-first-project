import {Component, Input} from '@angular/core';
import {Item} from "../../model/item.model.ts/item.model";

@Component({
  selector: 'app-item-card',
  standalone: true,
    imports: [ ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() item!: Item;
}
