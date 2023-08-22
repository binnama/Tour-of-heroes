import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  hero: Hero | undefined;

  constructor (
    private route: ActivatedRoute, // Holds the information about the route to this instance of the HeroDetailComponent.
    private heroService: HeroService, // Gets hero data from the remote server and this component will use it to get the hero-to-display.
    private location: Location // Anagular service for interacting with the borowser.
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  // snapshot is a static image of the route information shortly after the component was created.
  // paramMap is a dictionary of route parameter values extracted from the URL. The "id"-key returns the
  // id of the hero to fetch.
  // Number is JS`version of converting a string to a number.

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!, 10);
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    }
  }

  goBack(): void { 
    this.location.back();
  }
}
