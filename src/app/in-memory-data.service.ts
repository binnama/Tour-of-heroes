import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    { id: 21, name: 'Sherlock Holmes'},
    { id: 22, name: 'Hans Zimmer'},
    { id: 23, name: 'Detective Conan'},
    { id: 24, name: 'U.S.S Enterprice'},
    { id: 25, name: 'Kira'},
    { id: 26, name: 'Mumitrollet'},
    { id: 27, name: 'Naruto'},
    { id: 28, name: 'Kaneki'}
    ];
    
    return { heroes };
  }

  /*
  Overrides the gehId method to ensure that the hero always has an id.
  If the array is empty, the method retyrns the initial number (10).
  It the array is not empty, the method returns the highest hero id + 1-
  */
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +
    1 : 10;
  }
}
