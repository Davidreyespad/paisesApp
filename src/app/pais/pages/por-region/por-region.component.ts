import { Component } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais.service.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['AU', 'EU', 'EFTA', 'CARICOM', 'PA', 'USAN', 'EEU', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC',];
  /* regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania',]; */

  regionActiva: string = '';

  paises: PaisInterface[] = [];

  constructor(private servicioPais: PaisServiceService) { }

  seleccionarRegion(region: string) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.servicioPais.buscarRegion(region)
      .subscribe(paises => this.paises = paises);
  }
}
