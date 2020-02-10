import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-menu',
  templateUrl: './selection-menu.component.html',
  styleUrls: ['./selection-menu.component.css']
})
export class SelectionMenuComponent implements OnInit {

  public modesArray = [
    {name : 'Mode 1', TriggerContent :  '', img : 'https://i.pinimg.com/originals/f0/96/05/f096057b84da97d0ab740b5fb4508838.jpg'},
    {name : 'Mode 2', TriggerContent :  '', img : ''},
    {name : 'Mode 3', TriggerContent :  '', img : ''},
  ];
  constructor() { }

  ngOnInit() {
  }

}
