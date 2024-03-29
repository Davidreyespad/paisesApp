import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais.service.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: PaisInterface;

  constructor( private activatedRoute: ActivatedRoute,
               private paisService: PaisServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha(id))
      ).subscribe(pais=> this.pais = pais);
  }

}
