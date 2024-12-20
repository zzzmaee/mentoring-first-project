import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemsListComponent} from "./components/items-list/items-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'metal-detector';
}
