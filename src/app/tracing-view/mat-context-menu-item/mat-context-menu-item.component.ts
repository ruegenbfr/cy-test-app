import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavItem} from '../model/nav-item';

@Component({
  selector: 'app-mat-context-menu-item',
  templateUrl: './mat-context-menu-item.component.html',
  styleUrls: ['./mat-context-menu-item.component.css']
})
export class MatContextMenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild('childMenu') public childMenu;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}
