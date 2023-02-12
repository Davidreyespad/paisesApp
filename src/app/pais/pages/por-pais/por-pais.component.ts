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

    if (this.termino === "") {
      false
    } else {
      this.paisService.buscarPais(this.termino).subscribe((paises: any) => {
        console.log(paises)
        this.paises = paises;
      }, (err) => {
        console.log("Error")
        this.hayError = true;
      })
    }
  }

  sugerencias(termino: string) {
    this.hayError = false
  }
}