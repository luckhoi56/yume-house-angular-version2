import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../menu.service'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public menu: MenuService) { }
  public getTotal(){
    let m_total = 0
    for(let item of this.menu.getData()){
      m_total += item.Quantity * item.Price
    }
    return m_total
  }
  ngOnInit(): void {
  }

}

