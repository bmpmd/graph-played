import { Component } from '@angular/core';
import { Game } from './models/game';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graph-played';
  isLoading:boolean = false; 
  done:boolean = false; 
  games:Game[] = [];
}
