import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yume-drop-down',
  templateUrl: './yume-drop-down.component.html',
  styleUrls: ['./yume-drop-down.component.css']
})
export class YumeDropDownComponent implements OnInit {
  @Input() m_chosen_menu:string = ""
  public m_category=[]
  public m_default =""
  constructor() { }

  ngOnInit(): void {
    this.getCategory()
    this.m_default = this.m_category[0]
  }
  log(data: string): void {
    console.log(data);
    this.m_default=data
  }
  
  public getCategory(){
    for(let item of this.m_chosen_menu){
      this.m_category.push(item["Category"])
    }
    this.m_category = [... new Set(this.m_category)] // remove the duplicates
  }
}
