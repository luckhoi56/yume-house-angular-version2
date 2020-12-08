import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-yume-card',
  templateUrl: './yume-card.component.html',
  styleUrls: ['./yume-card.component.css']
})
export class YumeCardComponent implements OnInit {
  @Input() item
  @Input() m_content
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  plusOne():void{
    this.item.Quantity <9 ?this.item.Quantity++:false
  }
  minusOne():void{
    this.item.Quantity >0 ?this.item.Quantity--:false
  }
}
