import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public loadingEnd = false;

  constructor() { }

  ngOnInit() {
    this.timerLoading();
  }

  private timerLoading() {
    setTimeout( () => {
      this.loadingEnd = true;
    } , 5000);
  }

}
