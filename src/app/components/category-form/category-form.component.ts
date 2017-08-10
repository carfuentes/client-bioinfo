import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

import { Router } from "@angular/router";

import { CategoryService } from '../../services/category.service'


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<boolean>();
  categories;

  constructor(private category: CategoryService, private router:Router) { }

  ngOnInit() {
    this.category.getParentCategories().subscribe(json=> {
      this.categories=json;
    })
  }


  submitForm(myForm) {
    const myCat= {
      name: myForm.value.name,
      parent: myForm.value.parent
    }
    this.category.createAcategory(myCat).subscribe(data => {
      myForm.resetForm();
      this.submitted.emit(data.message);
    })
  }

}
