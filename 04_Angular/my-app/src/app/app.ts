import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './pokemon';

@Component({
 selector: 'app-root',
 imports: [RouterOutlet],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {
 protected readonly title = signal('my-app');

  getPokemon(){
     let pokemons = [
       new Pokemon("Magikarp","Agua", 'Pokemon carpa'),
       new Pokemon("Charmander","Fuego", 'Pokemon salamandra'),
       new Pokemon("Pikachu","Electrico", 'Pokemon Ratón'),
     ];
     return pokemons;
 }
}



















/* getHeroes(){
     let heroes = [
       new Hero(1, 'Spiderman'),
       new Hero(13, 'Wonder Woman'),
       new Hero(15, 'Lobezno'),
       new Hero(20, 'Catwoman')
     ];
     return heroes;
 }*/