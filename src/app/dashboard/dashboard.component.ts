import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  
    constructor(
      private router: Router,
      private heroService: HeroService) {
    }
  
    ngOnInit(): void {
      this.heroService.getHeroes()
        .then(heroes =>{
          this.heroes = heroes.slice(1, 5)
        });
    }
  
    gotoDetail(hero: Hero): void {
      const link = ['/detail', hero.id];
      this.router.navigate(link);
  }
}