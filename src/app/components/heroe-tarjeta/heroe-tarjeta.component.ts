import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'  
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() indice!: number;

  @Output() seleccionado: EventEmitter<number>;

  constructor(
    private router:Router,
  ) {
    this.seleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  verHeroe() {    
    // this.router.navigate(['/heroe',this.indice ]); 
    this.seleccionado.emit(this.indice);  
  };

}
