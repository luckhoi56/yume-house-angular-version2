import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yume-pay',
  templateUrl: './yume-pay.component.html',
  styleUrls: ['./yume-pay.component.css']
})
export class YumePayComponent implements OnInit {
  m_tax = 0
  m_total = 0
  constructor() { }

  ngOnInit(): void {
  }

}
