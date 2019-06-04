import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private nodes: any;
  private edges: any;

  constructor(private dataService: DataService) { 
    this.update();
  }

  update() {
    this.nodes = this.dataService.getStations().map(s => ({ data: s }));
    this.edges = this.dataService.getDeliveries().map(d => ({ data: d }));
  }

  getNodes(): any {
    return this.nodes;
  }

  getEdges(): any {
    return this.edges;
  }
}
