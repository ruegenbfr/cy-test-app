import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GraphService } from '../services/graph.service';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import { Layout } from '../shared/datatypes';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'tracing-view-schema-graph',
  templateUrl: './schema-graph.component.html',
  styleUrls: ['./schema-graph.component.css']
})
export class SchemaGraphComponent implements OnInit {

  private cy: any;
  private layout: Layout;
  private lastEvent: any;

  // @ViewChild('graph') graphElement: ElementRef;
  @ViewChild('cyGraph') graphElementRef: ElementRef;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(private graphService: GraphService) {
    if (cytoscape != null) {
      cytoscape.use(dagre);
    }
  }

  ngOnInit() {
    this.init(null);
  }

  init(layout: Layout) {
    const nodes = this.graphService.getNodes();
    const edges = this.graphService.getEdges();
    this.cy = cytoscape({
      container: this.graphElementRef.nativeElement,
      elements: {
          selectable: true,
          grabbable: true,
          nodes: this.graphService.getNodes(),
          edges: this.graphService.getEdges()
      },
      layout: layout != null ? { name: 'preset', zoom: layout.zoom, pan: layout.pan } : { name: 'random' },
      style: this.createStyle(),
      minZoom: 0.01,
      maxZoom: 10,
      wheelSensitivity: 0.5
  });
  this.cy.on('boxstart', function(event){
    // target holds a reference to the originator
    // of the event (core or element)
    var evtTarget = event.target;

    console.log('boxstart core');
    /*if( evtTarget === cy ){
      console.log('tap on background');
    } else {
      console.log('tap on some element');
    }*/
  });
  this.cy.on('boxend', function(event){
    // target holds a reference to the originator
    // of the event (core or element)
    var evtTarget = event.target;

    console.log('boxend core');
    /*if( evtTarget === cy ){
      console.log('tap on background');
    } else {
      console.log('tap on some element');
    }*/
  });
  this.cy.on('select', function(event){
    // target holds a reference to the originator
    // of the event (core or element)
    var evtTarget = event.target;

    console.log('select core ' + (event===this.lastEvent? 'add' : 'new'));
    this.lastEvent = event;
    /*if( evtTarget === cy ){
      console.log('tap on background');
    } else {
      console.log('tap on some element');
    }*/
  });
  this.cy.on('select', 'node', function(event){
    // target holds a reference to the originator
    // of the event (core or element)
    var evtTarget = event.target;

    //console.log('select node');
    /*if( evtTarget === cy ){
      console.log('tap on background');
    } else {
      console.log('tap on some element');
    }*/
  });
  this.cy.on('cxttap',(event) => {
    this.menuTrigger.openMenu();
  });
  }

  private createStyle(): any {
    return [{
      selector: 'node',
      style: {
        'width': 200,
        'height': 200,
        'content': 'data(name)',
        //          'text-opacity': 0.5,
        'text-valign': 'center',
        'color': 'white',
        'background-color': 'blue',
        'text-outline-width': 2,
        'text-outline-color': '#222'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 10,
        'target-arrow-shape': 'triangle',
        'line-color': 'black',
        'target-arrow-color': '#9dbaea'
      }
    },

    {
      selector: ':selected',
      style: {
        'background-color': 'yellow',
        'line-color': 'yellow',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
      }
    },

    {
      selector: 'edge:selected',
      style: {
        'width': 20
      }
    }
  ];
  }
  /*
  private createCY() {
    cytoscape({
      container: document.getElementById('cy'),

      minZoom: 0.1,
      maxZoom: 100,
      wheelSensitivity: 0.1,

      // panningEnabled: false,
      //boxSelectionEnabled: true,
      //autounselectify: false,
      //selectionType: 'additive',
      //autoungrabify: true,

      layout: {
        name: 'dagre'
      },

      style: [{
          selector: 'node',
          style: {
            'width': 200,
            'height': 200,
            'content': 'data(name)',
            //          'text-opacity': 0.5,
            'text-valign': 'center',
            'color': 'white',
            'background-color': 'blue',
            'text-outline-width': 2,
            'text-outline-color': '#222'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 10,
            'target-arrow-shape': 'triangle',
            'line-color': 'black',
            'target-arrow-color': '#9dbaea'
          }
        },

        {
          selector: ':selected',
          style: {
            'background-color': 'yellow',
            'line-color': 'yellow',
            'target-arrow-color': 'black',
            'source-arrow-color': 'black',
          }
        },

        {
          selector: 'edge:selected',
          style: {
            'width': 20
          }
        }
      ],

      elements: {
        //selectable: false,
        grabbable: false,
        nodes: [{
          data: {
            id: '0',
            text: 'abc'
          }
        }, {
          data: {
            id: '1',
            text: 'def'
          }
        }, {
          data: {
            id: '2',
            text: 'ghi'
          }
        }, {
          data: {
            id: '3',
            text: 'jkl'
          }
        }], // nodes
        edges: [{
            data: {
              color: '#f00',
              source: '0',
              target: '1'
            }
          }, {
            data: {
              color: '#f00',
              source: '1',
              target: '2'
            }
          }, {
            data: {
              color: '#f00',
              source: '2',
              target: '3'
            }
          }, {
            data: {
              color: '#f00',
              source: '0',
              target: '2'
            }
          }, {
            data: {
              color: '#000',
              source: '0',
              target: '3'
            }
          }, {
            data: {
              color: '#f00',
              source: '0',
              target: '3'
            }
          }] // edges
      } // elements
    }); // cytoscape

  }*/

}
