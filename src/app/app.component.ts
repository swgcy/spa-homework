import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works! by sawa';
  time : Date = new Date();
  text : string;
  
  ngOnInit(){
    setInterval(() => {this.time = new Date();}, 1000);
  }
  
 // constructor() {
 //    setInterval(function () { this.time = (new Date()).toString(); }.bind(this), 1000);
 //}

}
