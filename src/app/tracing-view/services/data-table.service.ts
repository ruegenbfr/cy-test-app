import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { TableMode, StationData, DeliveryData } from './../shared/datatypes';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  // stationColumns: string[];
  // deliveryColumns: string[];

  constructor(private dataService: DataService) {

  }

  /*init() {
    this.stationColumns = ['id', 'name'];
    this.deliveryColumns = ['id', 'source', 'target'];
  }*/

  getAvailableTableColumns(tableMode: TableMode): string[] {
    return tableMode === TableMode.STATIONS ?
        ['id', 'name'] :
        ['id', 'source', 'target'];
  }

  getTableModes(): TableMode[] {
      return [TableMode.STATIONS, TableMode.DELIVERIES];
  }

  getSelection(tableMode: TableMode): boolean[] {
      if (tableMode === TableMode.STATIONS) {
          return this.dataService.getStations().map(s => s.isSelected);
      } else {
          return this.dataService.getDeliveries().map(d => d.isSelected);
      }
  }

  getDataRows(tableMode: TableMode, columns: string[]): any[] {
    if (tableMode === TableMode.STATIONS) {
        return this.dataService.getStations().map(s => this.convertToDataRow(s, columns));
    } else {
        return this.dataService.getDeliveries().map(d => this.convertToDataRow(d, columns));
    }
  }

  private convertToDataRow(element: StationData | DeliveryData, props: string[]): any {
    const result = {};
    for (const prop of props) {
        result[prop] = element[prop];
    }
    return result;
  }
}
