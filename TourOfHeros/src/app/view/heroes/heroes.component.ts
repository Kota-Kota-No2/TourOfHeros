import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../service/hero.service';
import { MessageService } from '../../service/message.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    RouterModule,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
}
