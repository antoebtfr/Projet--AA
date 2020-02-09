import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public loaded = false;
  constructor() { }

  ngOnInit() {
    this.timerLoadedTime();
  }

  private timerLoadedTime() {
    setTimeout(() => {
      this.loaded = true;
      console.log('Salut');
    }, 10000);
  }

  private removeLoadingPage() {

  }

}
