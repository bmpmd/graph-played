import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { GraphModel } from 'src/app/models/graphmodel';
@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css'],
})



export class OutComponent implements OnInit {


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



  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  getModels(): any {
    console.log("get models was")
    var other: number = 0;
    var models = this.appComponent.games.map(({ name, playtime_forever }) => {
      var hrsApi: number = playtime_forever / 60;
      if (hrsApi < 30) {
        other += hrsApi;
        name = "Other"
        var value = parseFloat(hrsApi.toString()).toFixed(2);

      }
      else {
        var value = parseFloat(hrsApi.toString()).toFixed(2);
        return { name, value };
      }


      if (name !== "Other") {

      }
      else {
        //console.log(`ignoring ${name} since it only has ${value} hrs.`)
      }



    });



    console.log(`other hrs totla: ${other}`);
    console.log("models below:::")
    console.log(models)
    const results = models.filter(element => {
      return element !== undefined;
    });

    let otherGames =
      { name: 'Other', value: other.toString() }

    results.push(otherGames); 
    console.log("after::: ")
    console.log(results)
    return results;

  }
}



