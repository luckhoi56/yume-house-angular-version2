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
    this.m_menu_items=''
  }
  
  public getMenuItems(){
    this.menu.searchMenuItems().subscribe(resp =>{
      console.log(resp)
      this.m_menu_items = resp
    })
  }
 
}
