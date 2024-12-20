import {Component, inject, OnInit} from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {ItemCardComponent} from "../item-card/item-card.component";
import {ActivatedRoute} from "@angular/router";
import {ItemApiService} from "../../services/item-api.service";
import {Item, ItemSearch} from "../../model/item.model.ts/item.model";

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    ItemCardComponent
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent implements OnInit{
  private itemsService = inject(ItemsService);
  public items$ = this.itemsService.items$;
  private route = inject(ActivatedRoute);
  private itemApiService = inject(ItemApiService);

  constructor() {
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemApiService.getItem(+id).subscribe((item)=>{
      this.
    })
  }
}
