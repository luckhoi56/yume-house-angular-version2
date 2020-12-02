import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MenuService {

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
  

}
