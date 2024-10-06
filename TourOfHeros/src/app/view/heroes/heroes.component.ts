import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock-heros';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../service/hero.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  private getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
}
