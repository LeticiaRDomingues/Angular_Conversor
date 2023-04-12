import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

temp: number = 0;
cambio: number = 0;


cels_Kelv(){
  this.cambio = (this.temp * 1) + 273.15;
  this.cambio = parseFloat(this.cambio.toFixed(2));
}

cels_fahr(){

  this.cambio = (this.temp * 1.8) + 32;
  this.cambio = parseFloat(this.cambio.toFixed(2));
}

kelv_cels(){
  this.cambio = this.temp - 273.15;
  this.cambio = parseFloat(this.cambio.toFixed(2));
}

kelv_fahr(){
  this.cambio = 1.8 * (this.temp - 273.15) + 32;
  this.cambio = parseFloat(this.cambio.toFixed(2));
}

fahr_cels(){
  this.cambio = (this.temp - 32) * 0.5555555556;
  this.cambio = parseFloat(this.cambio.toFixed(5));
}

fahr_kelv(){
  this.cambio = (this.temp - 32) * 0.5555555556 + 273.15;
  this.cambio = parseFloat(this.cambio.toFixed(3));
}

}
