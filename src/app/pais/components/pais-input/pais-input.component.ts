import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
/* import {debounceTime} from 'rxjs/operators' */

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string>= new EventEmitter();

  @Input() placeholder: any = '';

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  constructor() { }

  ngOnInit(){
    this.debouncer.pipe(debounceTime(300))
    .subscribe(res =>{
      this.onDebounce.emit(res);
    });
  }

  buscar() {
    this.onEnter.emit( this.termino );
    this.termino = "";
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }

}