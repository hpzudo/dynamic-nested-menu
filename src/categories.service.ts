import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

export interface Category {
  name: string;
  id: number;
  parentId: number | null;
}

export interface NestedCategory extends Category {
  children?: Category[];
}

const MOCKED_CATEGORIES: Category[] = [
  {
    "name": "Bebidas",
    "id": 1,
    "parentId": null
  },{
    "name": "Comidas",
    "id": 2,
    "parentId": null
  }, {
    "name": "Limpieza",
    "id": 3,
    "parentId": null
  }, {
    "name": "Gaseosas",
    "id": 100,
    "parentId": 1
  }, {
    "name": "Con Alcohol",
    "id": 1010,
    "parentId": 100
  },
  {
    "name": "Sin Alcohol",
    "id": 1009,
    "parentId": 100
  }, {
    "name": "Con Azúcar",
    "id": 101,
    "parentId": 1009
  }, {
    "name": "Sin Azucar",
    "id": 103,
    "parentId": 1009
  }, {
    "name": "Jugos",
    "id": 189,
    "parentId": 103
  }, {
    "name": "Energizantes",
    "id": 1222,
    "parentId": 103
  }, {
    "name": "Fruta",
    "id": 1223,
    "parentId": 1222
  }, {
    "name": "Sin grasa",
    "id": 12231231,
    "parentId": 1223
  }
];


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  // NOTE: We dont have an endpoint that provides categories, so we mock it.
  public getCategories(): Observable<Category[]> {
    const categories = [...MOCKED_CATEGORIES];
    return of(categories)
  }

  public getNestedCategories(): Observable<NestedCategory[]> {
    return this.getCategories().pipe(
      map(categories => {
        return this.flatToNestedTree(categories)
      })
    )
  }



  private flatToNestedTree(categories: Category[], parent: number | null = null): Category[] {
    return categories.filter(category => category.parentId === parent).map(category => ({ ...category, children: this.flatToNestedTree(categories, category.id) }));
  }

}
