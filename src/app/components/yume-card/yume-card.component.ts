import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-yume-card',
  templateUrl: './yume-card.component.html',
  styleUrls: ['./yume-card.component.css']
})
export class YumeCardComponent implements OnInit {
  @Input() item
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
}
