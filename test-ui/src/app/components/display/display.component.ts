import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";


type car = {

  id: string,
  name: string
};

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  someString = "display this on page";
  enteredValue: string = '';
  boxValue: any

  cars: car[] = [{id: '1', name: "ford"}, {id: '2', name: "gm"}, {id: '3', name: "honda"}, {id: '4', name: "toyota"}];
  selectedCar: string = '';
  range: number = 50;
  flag: boolean = false;

  oneWayValue : string ='text'


  changeValue(event:Event){
    this.oneWayValue = (event.target as HTMLInputElement).value;
  }
  setData(event: Event) {
    this.enteredValue = (event.target as HTMLInputElement).value;
  }

  onEnter(value: any) {
    this.boxValue = value;
  }

  onChange(event: Event) {

    this.selectedCar = (event.target as HTMLSelectElement).value
    console.log(this.selectedCar);
  }

  onRangeChange(val: string) {
    this.range = +val;
    console.log(this.range);
  }


}
