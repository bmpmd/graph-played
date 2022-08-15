import { environment } from 'src/environments/environment';
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
    
    fetch(environment.url, {
      method: "GET",
      mode:'cors',
      headers: environment.headers
    })
    .then(
      (response) => {
        if(!response.ok){
          console.log(response)
        }
        return response.json()
      }

    )
    .then(
      data => console.log(data)
    )

  }




}
