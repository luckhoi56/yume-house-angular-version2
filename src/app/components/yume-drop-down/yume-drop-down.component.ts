import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yume-drop-down',
  templateUrl: './yume-drop-down.component.html',
  styleUrls: ['./yume-drop-down.component.css']
})
export class YumeDropDownComponent implements OnInit {
  @Input() m_chosen_menu:string = ""
  public m_category=[]
  constructor() { }

  ngOnInit(): void {
    this.getCategory()
  }
  log(data: string): void {
    console.log(data);
    this.m_chosen_menu=data
  }
  
  public getCategory(){
    for(let item of this.m_chosen_menu){
      this.m_category.push(item["Category"])
    }
    this.m_category = [... new Set(this.m_category)] // remove the duplicates
  }
}
