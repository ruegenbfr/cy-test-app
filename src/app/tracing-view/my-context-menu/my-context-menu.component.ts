import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-my-context-menu',
  templateUrl: './my-context-menu.component.html',
  styleUrls: ['./my-context-menu.component.css']
})
export class MyContextMenuComponent implements OnInit {

  public items = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' }
];

@ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  constructor() { }

  ngOnInit() {
  }

showMessage(message: any) {
  console.log(message);
}

}
