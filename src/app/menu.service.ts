import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private m_flag = false //this flag tell the data is not unionized
  public m_data = []
  public m_ready:any ={
    "menu_item_ready":0,
    "drink_size_ready":0,
    "drink_topping_ready":0,
    "soup_size":0,
    "soup_topping":0,
    "invoked":0
  }
  constructor(private http:HttpClient) { }

  public searchMenuItems(){
    return this.http.get('https://yumemenu.s3-us-west-1.amazonaws.com/databaseFile/menu')
  }
  public searchDrinkTopping(){ //worked
    return this.http.get('https://yumemenu.s3-us-west-1.amazonaws.com/databaseFile/drinkTopping')
  }
  public searchDrinkSize(){ //worked
    return this.http.get('https://yumemenu.s3-us-west-1.amazonaws.com/databaseFile/drinkSize')
  }
  public searchSoupTopping(){ //worked
    return this.http.get('https://yumemenu.s3-us-west-1.amazonaws.com/databaseFile/soupTopping')
  }
  public searchSoupSize(){ //worked
    return this.http.get('https://yumemenu.s3-us-west-1.amazonaws.com/databaseFile/soupSize')
  }
  public sendOrder(){
    return this.http.post("http://localhost:4242/sendOrder", this.m_data)
    //return this.http.get('http://localhost:4242/')
  }
  
  public receiveAllData(){
     // data is unionized now
    return this.m_flag
  }
  public setFlag(){
    this.m_flag = true
  }
  public getData(){
    return this.m_data
  }
  public setData(data){
    this.m_data = data
  }
}
