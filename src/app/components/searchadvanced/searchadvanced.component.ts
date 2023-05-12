import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


interface DropdownOption {
  id: string;
  icono: string;
  name: string;
}

@Component({
  selector: 'app-searchadvanced',
  templateUrl: './searchadvanced.component.html',
  styleUrls: ['./searchadvanced.component.css']
})
export class SearchadvancedComponent implements OnInit {
  selectedOption!: number; // variable para almacenar la opción seleccionada
  campos: any[] = [];
  selecteOption: string = '';
  selecption!: string;




  ngOnInit(): void {
  }




celdas = [{
  opcion: null,
  busqueda: ''
}]; // Inicializamos la tabla con una celda vacía

opciones = [

  { id: 'Autor', name:'Autor'},
  { id: 'Título', name:'Título'},
  { id: 'PDF', name:'Dentro del PDF'},
  { id: 'Tema', name: 'Tema'},
  { id: 'Fecha', name:'Fecha' },
  { id: 'area', name:'Área de derecho'}
];

agregarCelda() {
  // Creamos una nueva celda vacía
  const nuevaCelda = {
    opcion: null,
    busqueda: ''
  };
  // Agregamos la nueva celda al arreglo de celdas
  this.celdas.push(nuevaCelda);
}

eliminarCelda(i: number) {
  // Verificamos si hay más de una celda en la tabla antes de eliminar
  if (this.celdas.length > 1) {
    // Eliminamos la celda en el índice especificado
    this.celdas.splice(i, 1);
  }
}


// limpiar la pagina

limpiarPagina() {
  location.reload();
}




}
