import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableMode } from '../../shared/datatypes';

// this is a dumb component
@Component({
  selector: 'app-table-settings',
  templateUrl: './table-settings.component.html',
  styleUrls: ['./table-settings.component.css']
})
export class TableSettingsComponent implements OnInit {

  // tableSettingsMode: TableMode;

  @Input() tableModes: TableMode[];
  @Input() activeTableMode: TableMode;
  @Output() tableModeChange = new EventEmitter<TableMode>();

  onTableModeChange(newValue: TableMode) {
    console.log('newvalue', newValue);
    this.activeTableMode = newValue;
    this.tableModeChange.emit(newValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
