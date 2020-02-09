import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection-tips',
  templateUrl: './connection-tips.component.html',
  styleUrls: ['./connection-tips.component.css']
})
export class ConnectionTipsComponent implements OnInit {

  public tips: string;
  public tipsArray = ['Je suis le tips 1', 'Je suis le tips 2', 'Je suis le tips 3'];
  constructor() { }

  ngOnInit() {
    this.showRandomTips(this.tipsArray.length);
  }

  private showRandomTips(max: number) {
    const numero = Math.floor(Math.random() * Math.floor(max));
    this.tips = this.tipsArray[numero];
  }
}
