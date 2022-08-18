import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  searchForm = this.formBuilder.group({
    query: '',
  });
  searchTerm: string = '';
  constructor(private gameService: GameService,
    private formBuilder: FormBuilder) { }

  onSubmit(): void {

    console.log(`search: ${this.searchTerm}`)
    fetch(environment.url + `${this.searchTerm}`, {
      method: "GET",
      mode: 'cors',
      headers: environment.headers
    })
      .then(
        (response) => {
          if (!response.ok) {
            console.log(response)
          }
          return response.json()
        }

      )
      .then(
        data => {
          
          
          console.log(data.games)
        }
      )
  }

  //oninit, show in console response of serv 
  ngOnInit(): void {

    

  }






}
