import { Component } from '@angular/core';
import { Game } from './models/game';
import { PlayerData } from './models/playerdata';
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
  data: PlayerData[]=[];
}
