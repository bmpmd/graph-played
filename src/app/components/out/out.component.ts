import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css'],
})



export class OutComponent implements OnInit {
  public graph = {
    data: [
  
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: { width: 320, height: 240, title: 'A Fancy Plot' }
  };



  constructor(public appComponent: AppComponent) {


    var models = appComponent.games.map(({name, playtime_forever})=>{
      var hrsApi:number = playtime_forever / 60;
      var hrs = parseFloat(hrsApi.toString()).toFixed(2);
       
      return {name, hrs};
    });

    console.log(models);


  }

  ngOnInit(): void {
  }


}
