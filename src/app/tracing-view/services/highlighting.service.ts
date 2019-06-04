import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HighlightingService {

  constructor(private dataService: DataService) { }
}
