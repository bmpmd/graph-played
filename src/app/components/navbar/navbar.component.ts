import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  onClick(){
    this.appComponent.done = false; 
    this.appComponent.isLoading = false;
  }

}
