import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { GraphModel } from 'src/app/models/graphmodel';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css'],
})


export class OutComponent implements OnInit {

  colorScheme: Color = { domain: ['#ef476f', '#ffd166', '#06d6a0', '#06d6a0', '#118ab2', '#073b4c'], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', };
  res: any[] = [];
  //options for ngx graph 
  view: any[] = [700, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  topThree: any[] = [];
  avi: string="";
  

 


  constructor(public appComponent: AppComponent) { 
   
  }

  ngOnInit(): void {
    //sets all the stuff right... 
    //console.log("get models was")
    
    this.appComponent.games = this.appComponent.games.sort(({playtime_forever:a}, {playtime_forever:b}) => b-a);
    var other: number = 0;
    
    var avi = this.appComponent.data[0].avatarfull;
    var models = this.appComponent.games.map(({ name, playtime_forever }) => {
      var hrsApi: number = playtime_forever / 60;
      if (hrsApi < 5) {
        other += hrsApi;
        name = "Other"
        var value = parseFloat(hrsApi.toString()).toFixed(2);

      }
      else {
        var value = parseFloat(hrsApi.toString()).toFixed(2);
        return { name, value };
      }
      

    



    });



    console.log(`other hrs totla: ${other}`);
    console.log("models below:::")
    console.log(models)
    const results = models.filter(element => {
      return element !== undefined;
    });

    let otherGames =
      { name: 'Other', value: parseFloat(other.toString()).toFixed(2) }

    results.push(otherGames); 
    console.log("after::: ")
    console.log(results)
    this.res = results;


    //get top 3 
    this.topThree = this.getTopThree();


    //date 
    this.getDate();

  }

  //returns an array of image urls for the top three most played games 
  //on a user's profile 
  getTopThree():any{

    
    var res = this.appComponent.games.sort(({playtime_forever:a}, {playtime_forever:b}) => b-a);
    console.log(`top three: ${res[0].name}, ${res[1].name}, ${res[2].name} `)
    var list = [];
    for(let i = 0; i < 3; i++){
      list.push(`https://steamcdn-a.akamaihd.net/steam/apps/${this.appComponent.games[i].appid}/header.jpg`)
    }
    return list;
  }
  getModels(): any {
    console.log("get models was")
    var other: number = 0;
    this.appComponent.games = this.appComponent.games.sort(({playtime_forever:a}, {playtime_forever:b}) => b-a);
    var models = this.appComponent.games.map(({ name, playtime_forever }) => {
      var hrsApi: number = playtime_forever / 60;
      if (hrsApi < 5) {
        other += hrsApi;
        name = "Other"
        var value = parseFloat(hrsApi.toString()).toFixed(2)

      }
      else {
        var value = parseFloat(hrsApi.toString()).toFixed(2);
        return { name, value };
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

  getTotalPlayed():any{
    var sum = 0;
    this.appComponent.games.forEach(game => {
      sum += game.playtime_forever;
    });
    return sum.toLocaleString();
  }

  getTotalPlayedHours():any{
    var sum = 0;
    this.appComponent.games.forEach(game => {
      sum += game.playtime_forever;
    });
    sum = sum / 60;
    return sum.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})
  }

  //gets the date profile was created
  //and returns the amount of days since account creation, the avg hrs/day 
  getDate():void{
    var date = new Date(this.appComponent.data[0].timecreated * 1000);
    console.log(`DATE: ${date}` )

  }
}



