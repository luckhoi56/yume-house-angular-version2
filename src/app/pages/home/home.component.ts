import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../menu.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  m_status :any
  m_reason_to_close: any
  constructor(public menu: MenuService) { }

  ngOnInit(): void {
    this.menu.statusRestaurant().subscribe(data=>{
      this.m_status = data["status"]
    })
    this.menu.getReasonToClose().subscribe(data=>{
      this.m_reason_to_close = data["reason"]
    })
  }

}
