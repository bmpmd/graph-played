import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { GraphModel } from 'src/app/models/graphmodel';
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

  //options for ngx graph 
  view: any[] = [700, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: any = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };



  constructor(public appComponent: AppComponent) {}

  ngOnInit(): void {
  }

  getModels(): any {

    var models = this.appComponent.games.map(({ name, playtime_forever }) => {
      var hrsApi: number = playtime_forever / 60;
      var value = parseFloat(hrsApi.toString()).toFixed(2);

      return { name, value };
    });

    console.log(models);
    return models;

  }
}



