import { Component, OnInit, ViewChild, ElementRef, TemplateRef, Input } from '@angular/core';
import { DataTableService } from './../../services/data-table.service';
import { ShowType, TableMode } from './../../shared/datatypes';
import { DatatableComponent} from '@swimlane/ngx-datatable';
import { csvFormatRows } from 'd3';

@Component({
    selector: 'tracing-view-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

    // rows = [];
    // columns = [];
    // selected = [];

    // @Input() propertyNames: string[];
    // @Input() data: any;
    @Input() rows: {}[];
    @Input() dataColumns: string[];
    @Input() selectedRows: boolean[];
    columns;
    // @Input() rows;


    constructor() {

        const tmp = this.dataColumns;
        /*this.columns = [
            {
                prop: 'selected',
                name: '',
                sortable: false,
                canAutoResize: false,
                draggable: false,
                resizable: false,
                headerCheckboxable: true,
                checkboxable: true,
                width: 30
            },
            ...this.dataColumns.map(columnName => ({ prop: columnName}))
        ];*/

        // this.fetch((data) => {
        // this.rows = [...this.data];
        // });
    }

    ngOnInit() {
        this.columns = [
            {
                prop: 'selected',
                name: '',
                sortable: false,
                canAutoResize: false,
                draggable: false,
                resizable: false,
                headerCheckboxable: true,
                checkboxable: true,
                width: 30
            },
            ...this.dataColumns.map(columnName => ({ prop: columnName}))
        ];
    }

    onSelect(row) {
        console.log(row);
    }

    /*fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'https://unpkg.com/@swimlane/ngx-datatable@6.3.0/assets/data/company.json');

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }*/
}
