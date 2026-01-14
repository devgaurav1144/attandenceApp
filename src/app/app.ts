
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // define datatype for variable and function return type
  sum(a: number, b: number): number {
    return a + b
  }

  //PointerEvent is just event type 
  handlerEvent(event:PointerEvent | Event |MouseEvent){
    console.log(event)
  }

}

