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
  this.cambio = this.temp + 273.15;
  this.cambio = parseFloat(this.cambio.toFixed(2));
}

cels_fahr(){

  this.cambio = parseFloat(this.cambio.toFixed(2));
}

kelv_cels(){

  this.cambio = parseFloat(this.cambio.toFixed(2));
}

kelv_fahr(){

  this.cambio = parseFloat(this.cambio.toFixed(2));
}

fahr_cels(){

  this.cambio = parseFloat(this.cambio.toFixed(2));
}

fahr_kelv(){

  this.cambio = parseFloat(this.cambio.toFixed(2));
}

}
