import { Component, OnInit } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais.service.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: PaisInterface[] = [];

  constructor(private paisService: PaisServiceService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (resp) => {
          this.paises = resp;
        },
        error: (err) => {
          this.hayError = true; this.paises = [];
          console.log("ERROR" + err);
        }
      });
  }
}