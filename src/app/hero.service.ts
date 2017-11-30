import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './heroes';
import { InMemoryDataService } from './in-memory-data.service';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(private client: HttpClient) { }

  getHeroes(): Promise<Array<Hero>> {
    return this.client
      .get<Hero[]>(this.heroesUrl)
      .toPromise()
      .then((response) => {
        return response as Hero[];
      })
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  save(hero: Hero): Promise<Hero> {
    console.log( );
    
    //parseInt(hero.id)() {
    //   return this.put(hero);
    // }
    return this.post(hero);
  }

  delete(hero: Hero): Promise<Response> {
    const headers = new HttpHeaders()
    .set('Content-Type','application/json');

    const url = `${this.heroesUrl}/${hero.id}`;

    return this.client
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Hero
  private post(hero: Hero): Promise<Hero> {
    const headers = new HttpHeaders()
    .set('Content-Type','application/json');

    return this.client
      .post<any>(this.heroesUrl, hero, { headers: headers })
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  // Update existing Hero
  private put(hero: Hero): Promise<Hero> {
    const headers = new HttpHeaders()
    .set('Content-Type','application/json');

    const url = `${this.heroesUrl}`;

    return this.client
      .put(url, JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}