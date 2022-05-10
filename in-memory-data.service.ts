// #docregion , init
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Naruto' },
      { id: 12, name: 'Luffy' },
      { id: 13, name: 'Zoro' },
      { id: 14, name: 'Goku' },
      { id: 15, name: 'Light' },
      { id: 16, name: 'Higarashi' },
      { id: 17, name: 'Magica' },
      { id: 18, name: 'Araragi' },
      { id: 19, name: 'Badsha' },
      { id: 20, name: 'King of Kings' }
    ];
    return {heroes};
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
