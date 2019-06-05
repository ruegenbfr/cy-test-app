import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatRadioModule } from '@angular/material';
import { TracingViewComponent } from './tracing-view.component';
import { SchemaGraphComponent } from './schema-graph/schema-graph.component';
import { GraphSettingsComponent } from './graph-settings/graph-settings.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableSettingsComponent } from './data-table-container/table-settings/table-settings.component';
// import { DataTableContainerComponent } from './data-table-container/data-table-container.component';
import { DataFilterComponent } from './data-table-container/data-filter/data-filter.component';
import { DataTableContainerComponent } from './data-table-container/data-table-container.component';
import { DataTableComponent } from './data-table-container/data-table/data-table.component';

@NgModule({
  declarations: [
      TracingViewComponent,
      SchemaGraphComponent,
      GraphSettingsComponent,
      TableSettingsComponent,
      DataTableContainerComponent,
      DataTableComponent,
      DataFilterComponent
    ],
  imports: [
    CommonModule, FormsModule, NgxDatatableModule, MatToolbarModule, MatRadioModule
  ],
  exports: [
    TracingViewComponent,
    SchemaGraphComponent,
    DataTableContainerComponent
  ]
})
export class TracingViewModule { }
