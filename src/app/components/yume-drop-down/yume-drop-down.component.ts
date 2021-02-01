import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yume-drop-down',
  templateUrl: './yume-drop-down.component.html',
  styleUrls: ['./yume-drop-down.component.css']
})
export class YumeDropDownComponent implements OnInit {
  public m_chosen_menu:string = "Pho"
  constructor() { }

  ngOnInit(): void {
  }
  log(data: string): void {
    console.log(data);
    this.m_chosen_menu=data
  }
  
}
