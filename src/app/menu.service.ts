import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private m_flag = false //this flag tell the data is not unionized
  public m_data = []
  public m_chosen_category=""  //pho default
  public m_ready:any ={
    "menu_item_ready":0,
    "drink_size_ready":0,
    "drink_topping_ready":0,
    "soup_size":0,
    "soup_topping":0,
    "invoked":0
  }
  constructor(private http:HttpClient) { }
  public statusRestaurant(){
    return this.http.get("http://localhost:4242/statusRestaurant")
  }
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
  public getReasonToClose(){
    return this.http.get("http://localhost:4242/getReasonToClose")
  }
  public getServer(){
    return this.http.get("http://localhost:4242")
  }
  public getHours(){
    return this.http.get("http://localhost:4242/getHours")
  }
  public receiveAllData(){
     // data is unionized now
    return this.m_flag
  }
  public setFlag(){
    this.m_flag = true
  }
  public getData(){
    //this.m_chosen_category = this.m_data[0]["Category"]
    return this.m_data
  }
  public getFilteredData(){
    let m_temp =[]
    for(let item of this.m_data){
      if(item["Category"] == this.m_chosen_category){
        m_temp.push(item)
      }
    }
    return m_temp
  }
  public setChosenCategory(m_value){
    this.m_chosen_category = m_value
  }
  public setData(data){
    this.m_data = data
  }
}
