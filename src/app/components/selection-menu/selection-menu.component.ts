import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-menu',
  templateUrl: './selection-menu.component.html',
  styleUrls: ['./selection-menu.component.scss']
})
export class SelectionMenuComponent implements OnInit {

  public modesArray = [
    {name : 'Mode 1', TriggerContent :  '', img : 'https://i.pinimg.com/originals/f0/96/05/f096057b84da97d0ab740b5fb4508838.jpg'},
    {name : 'Mode 2', TriggerContent :  '', img : 'https://i.pinimg.com/564x/98/23/4c/98234c302030534ece52c705458ebd87.jpg'},
    {name : 'Mode 3', TriggerContent :  '', img : 'https://i.pinimg.com/564x/5c/a6/c6/5ca6c6615e853612eed8bcb3f69649d5.jpg'},
  ];

  public modeUnClicked = false;
  
  constructor() { }

  ngOnInit() {
  }

}
