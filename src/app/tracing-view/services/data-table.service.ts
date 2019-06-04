import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { TableMode } from './../shared/datatypes';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  stationColumns: string[];
  deliveryColumns: string[];

  constructor(private dataService: DataService) { }

  init() {
    this.stationColumns = ['id', 'name'];
    this.deliveryColumns = ['id', 'source', 'target'];
  }

  getAvailableTableColumns(tableMode: TableMode): string[] {
    return tableMode === TableMode.STATIONS ? this.stationColumns : this.deliveryColumns;
  } 
}
