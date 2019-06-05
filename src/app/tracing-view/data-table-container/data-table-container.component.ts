import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../services/data-table.service';
import { TableMode } from './../shared/datatypes';

@Component({
  selector: 'tracing-view-data-table-container',
  templateUrl: './data-table-container.component.html',
  styleUrls: ['./data-table-container.component.css']
})
export class DataTableContainerComponent implements OnInit {

  rows;
  dataColumns: Map<TableMode, string[]>;
  selectedRows;
  tableModes: TableMode[];
  selectedTableMode: TableMode;

  constructor(private tableService: DataTableService) {
    this.tableModes = tableService.getTableModes();
    this.selectedTableMode = this.tableModes[0];
    this.dataColumns = new Map();
    for (const tableMode of this.tableModes) {
        this.dataColumns.set(tableMode, tableService.getAvailableTableColumns(this.selectedTableMode));
    }
    this.rows = tableService.getDataRows(this.selectedTableMode, this.dataColumns.get(this.selectedTableMode));
    this.selectedRows = tableService.getSelection(this.selectedTableMode);
  }

  ngOnInit() {
  }

}
