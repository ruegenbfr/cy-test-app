import { Injectable } from '@angular/core';
import { FCLData, StationData, DeliveryData } from '../shared/datatypes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: FCLData;
  constructor() {
    this.initData();
  }

  private initData() {
    const nStations = 100;
    const nDeliveries = 450;
    const minDel = 3;
    const maxDel = 6;
    const stations: StationData[] = [];
    for (let i = 0; i < nStations; i++) {
      stations.push({
        id: 'S' + i,
        name: 'Station ' + i,
        incoming: [],
        outgoing: [],
        isSelected: false,
        isVisible: true,
        position: null
      });
    }
    const deliveries: DeliveryData[] = [];
    for (let i = 0; i < nDeliveries; i++) {
      deliveries.push({
        id: 'D' + i,
        name: 'Product ' + i,
        isSelected: false,
        isVisible: true,
        source: 'S' + Math.floor(Math.random() * nStations),
        target: 'S' + Math.floor(Math.random() * nStations)
      });
    }
    this.data = {
      stations: stations,
      deliveries: deliveries
    };
  }

  getStations(): StationData[] {
    return this.data.stations;
  };

  getDeliveries(): DeliveryData[] {
    return this.data.deliveries;
  };
}
