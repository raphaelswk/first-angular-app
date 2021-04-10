import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent { 
  public clickCounter: number = 0;
  public imageUrl: string = "https://pbs.twimg.com/profile_images/1222654825403424768/-ySQePLc.jpg";
  public name: string = "";

  addClick() {
    this.clickCounter++;
  }

  resetCounter() {
    this.clickCounter = 0;
  }

  KeyUp(event: any) {
    this.name = event.target.value;
  }
}
