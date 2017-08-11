import { Component, OnInit } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

import { Router } from "@angular/router";

import { CategoryService } from '../../services/category.service'
import { SharedFilteringService } from '../../services/shared-filtering.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nodes;
  


  constructor(private category: CategoryService, private router: Router, private sharing:SharedFilteringService) { }

  options:  ITreeOptions = {
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        },
        click: (tree, node, $event) => {
          if(!node.hasChildren) {
            this.router.navigate(["/categories", node.data.element.name ,"workflows"])
          };
        }
      }
    },
  }

  ngOnInit() {
    this.sharing.event.subscribe((data)=> {
      this.category.getTreeCategories().subscribe(json=> {
      this.nodes=json;
    })

    })
    this.category.getTreeCategories().subscribe(json=> {
      this.nodes=json;
    })
  }



}
