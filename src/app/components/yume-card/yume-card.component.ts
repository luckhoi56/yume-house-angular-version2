import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-yume-card',
  templateUrl: './yume-card.component.html',
  styleUrls: ['./yume-card.component.css']
})
export class YumeCardComponent implements OnInit {
  @Input() nzSrc
  @Input() m_src

  constructor() { }

  ngOnInit(): void {
  }

}
