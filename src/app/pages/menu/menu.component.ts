import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../menu.service'
import {Item} from "./item"
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public m_items = []
  //these are for the http call holders
  public m_menu_items
  public m_drinkSize
  public m_drinkTopping
  public m_soupSize
  public m_soupTopping
  ///
 
  constructor(private menu: MenuService) {
    this.getMenuItems()
    this.getDrinkSize()
    this.getDrinkTopping()
    this.getSoupTopping()
    this.getSoupSize() 
  }

  ngOnInit(): void {
   
  }
  
  public getMenuItems(){
    this.menu.searchMenuItems().subscribe(resp =>{
      this.m_menu_items = resp
    })
  }

  public getDrinkSize(){ //worked
    this.menu.searchDrinkSize().subscribe(resp =>{
      this.m_drinkSize = resp
    })
  }

  public getDrinkTopping(){ //worked
    this.menu.searchDrinkTopping().subscribe(resp =>{
      this.m_drinkTopping = resp
    })
  }
  public getSoupTopping(){ //worked
    this.menu.searchSoupTopping().subscribe(resp =>{
      this.m_soupTopping=resp
    })
  }
  public getSoupSize(){ //worked
    this.menu.searchSoupSize().subscribe(resp =>{
      this.m_soupSize=resp
    })
  }
}
