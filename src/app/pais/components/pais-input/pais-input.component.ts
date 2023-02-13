import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: any = '';

  termino: string = '';

  constructor() { }

  ngOnInit(){
  }

  buscar() {
    this.onEnter.emit( this.termino );
    this.termino = "";
  }

}
