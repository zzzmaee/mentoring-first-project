import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../model/item.model.ts/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = 'https://md.debug.testcenter.kz/md';

  constructor() {
  }

  public editItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/api/v1/data/update/${item.id}`, item);
  }

  public addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.apiUrl}/api/v1/data/metal_detectors`, item)
  }

  public getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/api/v1/metal_detectors/${id}`);
  }

  public filterItem(type: Item[]): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/api/v1/metal_detectors/type/${type}`);
  }

  public nameFilterSearch(brand: Item[]): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/api/v1/metal_detectors/brand/${brand}`);
  }

  public deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(`${this.apiUrl}/api/v1/data/delete/${id}`);
  }
}
