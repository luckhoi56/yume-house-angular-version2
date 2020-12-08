import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yume-radio-button',
  templateUrl: './yume-radio-button.component.html',
  styleUrls: ['./yume-radio-button.component.css']
})
export class YumeRadioButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  radioValue = 'A';
}
