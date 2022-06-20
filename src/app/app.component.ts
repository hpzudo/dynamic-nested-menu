import {Component} from '@angular/core';
import {CategoriesService, NestedCategory} from "./categories.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Nested Menu';

  constructor(private categoriesService: CategoriesService) {}

  nestedCategories$: Observable<NestedCategory[]> = this.categoriesService.getNestedCategories();

}
