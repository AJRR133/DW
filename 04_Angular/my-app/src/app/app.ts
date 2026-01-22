import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero';

@Component({
 selector: 'app-root',
 imports: [RouterOutlet],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {
 protected readonly title = signal('my-app');

  getHeroes(){
     let heroes = [
       new Hero(1, 'Spiderman'),
       new Hero(13, 'Wonder Woman'),
       new Hero(15, 'Lobezno'),
       new Hero(20, 'Catwoman')
     ];
     return heroes;
 }
}

