import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../menu.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public m_menu_items
  constructor(private menu: MenuService) { }

  ngOnInit(): void {
    this.getMenuItems()
  }
  
  public getMenuItems(){
    this.menu.searchMenuItems().subscribe(resp =>{
      this.m_menu_items = resp
    })
  }
 
}
