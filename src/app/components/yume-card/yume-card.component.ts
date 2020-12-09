import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-yume-card',
  templateUrl: './yume-card.component.html',
  styleUrls: ['./yume-card.component.css']
})
export class YumeCardComponent implements OnInit {
  radioValue_1 = ""
  radioValue_2 = ""
  @Input() item
  @Input() m_content
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
    if(this.item.Toppings[0] != null){
      //console.log(this.item.Toppings[0].Choice)
      this.radioValue_1 = this.item.Toppings[0].Choice
      this.item["chosenTopping"] = this.radioValue_1
    }
    if(this.item.Sizes[0] != null){
      //console.log(this.item.Sizes[0].Choice)
      this.radioValue_2 = this.item.Sizes[0].Choice
      this.item["chosenSize"] = this.radioValue_2
    }
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
  public updateToppingChosen(target):void{
    this.item["chosenTopping"] = this.radioValue_1
    console.log(this.item)
    //console.log("ehy")
  }
  public updateSizeChosen(target):void{
    this.item["chosenSize"] = this.radioValue_2
    console.log(this.item)
    //console.log("ehy")
  }
}
