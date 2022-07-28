import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private gameService: GameService) { }

  //oninit, show in console response of serv 
  ngOnInit(): void {
    console.log(this.gameService.getAllGames());
  }




}
