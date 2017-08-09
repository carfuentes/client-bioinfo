import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  categories;
  showHide=false;

  constructor(private session: SessionService, private category:CategoryService) { }

  ngOnInit() {
    this.category.getAdminCategories().subscribe(data=> {
      this.categories=data;
      console.log(this.categories);
    })
  }

  handleCategoryUpdated(cat) {
    this.category.getAdminCategories().subscribe(data=> {
      this.categories=data;
  });
  }

}
