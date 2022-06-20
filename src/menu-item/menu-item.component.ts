import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {NestedCategory} from "../categories.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {

  @Input()
  public items: NestedCategory[] = [];

  @ViewChild('childMenu' , { static: true })
  public childMenu: any;

}
