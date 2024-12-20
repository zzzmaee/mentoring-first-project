import {inject, Injectable} from '@angular/core';
import {ItemApiService} from "./item-api.service";
import {BehaviorSubject} from "rxjs";
import {Item} from "../model/item.model.ts/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemApiService = inject(ItemApiService);

  private itemsSubject$ = new BehaviorSubject<Item[]>([]);
  public items$ = this.itemsSubject$.asObservable();

  constructor() {
  }

  public loadItems(id: number): void {
    this.itemApiService.getItem(id).subscribe((item)=>{
      this.itemsSubject$.next(item)
    })
  }
}
