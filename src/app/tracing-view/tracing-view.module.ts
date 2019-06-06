import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'ngx-contextmenu';
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
import { MyContextMenuComponent } from './my-context-menu/my-context-menu.component';

@NgModule({
  declarations: [
      TracingViewComponent,
      SchemaGraphComponent,
      GraphSettingsComponent,
      TableSettingsComponent,
      DataTableContainerComponent,
      DataTableComponent,
      DataFilterComponent,
      MyContextMenuComponent
    ],
  imports: [
    CommonModule, FormsModule, NgxDatatableModule, MatToolbarModule, MatRadioModule, ContextMenuModule.forRoot()
  ],
  exports: [
    TracingViewComponent,
    SchemaGraphComponent,
    DataTableContainerComponent,
    MyContextMenuComponent
  ]
})
export class TracingViewModule { }
