import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => {
        if(hero){
          this.hero = hero
        }
        else{
          this.hero = {
            id: 0,
            name: "存在しません"
          }
        }
      });
  }

  public goBack(): void {
    this.location.back();
  }
}
