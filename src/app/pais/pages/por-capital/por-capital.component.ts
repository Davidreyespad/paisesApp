import { Component, OnInit } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais.service.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  hayError: boolean = false;
  paises: PaisInterface[] = [];
  termino: string = "";

  constructor(private paisService: PaisServiceService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
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
