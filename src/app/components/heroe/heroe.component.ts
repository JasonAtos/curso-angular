import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(
    private activatedRoute:ActivatedRoute,
    private heroesService: HeroesService,
  ) {
    this.activatedRoute.params.subscribe(param => {          
      this.heroe = this.heroesService.getHeroe(+param["id"]);
      this.heroe.casaLogo = this.heroe.casa === 'DC' ? 
      'assets/img/dclogo.jpg' 
      :
      'assets/img/marvellogo.png';    
      console.log(this.heroe);
                 
    })
   }

  ngOnInit(): void {
  }

}