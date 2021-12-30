import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'  
})
export class BusquedaComponent implements OnInit {

  listaHeroes:any[] = [];
  busqueda:string = "";
  @Output() seleccionado: EventEmitter<number>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService:HeroesService,
    ) {
      this.seleccionado = new EventEmitter();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametro => {
      this.busqueda = parametro['nombre'];
      this.listaHeroes = this.heroesService.buscarHeroe(parametro['nombre']);        
    });

  }

  verHeroe() {    
    // this.router.navigate(['/heroe',this.indice ]); 
    // this.seleccionado.emit(this.indice);  
  };

}
