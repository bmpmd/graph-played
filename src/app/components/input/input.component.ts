import { AppComponent } from './../../app.component';
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
    private formBuilder: FormBuilder,
    public appComponent: AppComponent) { }
  
  onSubmit(): void {
    this.appComponent.isLoading = true; 
    this.appComponent.done = false; 
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
          
          this.appComponent.isLoading = false; 
          this.appComponent.done = true; 
          console.log(data.games)
          this.appComponent.games = data.games;
        }
      )
  }

  //oninit, show in console response of serv 
  ngOnInit(): void {

    

  }






}
