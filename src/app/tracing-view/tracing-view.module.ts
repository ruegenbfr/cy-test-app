import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracingViewComponent } from './tracing-view.component';
import { SchemaGraphComponent } from './schema-graph/schema-graph/schema-graph.component';
import { GraphSettingsComponent } from './graph-settings/graph-settings.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TableSettingsComponent } from './data-table/table-settings/table-settings.component';

@NgModule({
  declarations: [TracingViewComponent, SchemaGraphComponent, GraphSettingsComponent, DataTableComponent, TableSettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TracingViewComponent,
    SchemaGraphComponent
  ]
})
export class TracingViewModule { }
