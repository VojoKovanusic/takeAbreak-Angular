import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  firistWarning

  timeWarningForPause = '2019-01-13 20:08:00'

  endPauseWarning = false;
  endPauseTime = '2019-01-15T15:02:50.371'
  
   date=new Date('2019-01-15T15:02:50.371');
  
  storageValue:string;

  constructor() {
    this.firistWarning=JSON.parse(localStorage.getItem("firistWarning")) === true
  }
  ngOnInit(): void { localStorage.setItem("firistWarning","false")
    console.log(this.date
      )
  }

  timeForWarning() {
    localStorage.setItem("firistWarning","true")
    this.firistWarning = JSON.parse(localStorage.getItem("firistWarning")) === true;
  }
  pauseIsEnded() {
    this.endPauseWarning = true;
  }

  resetWarning() {
    this.firistWarning = false;
  }
}
