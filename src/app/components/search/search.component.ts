import { Component, OnInit } from '@angular/core';


// Definición de la interfaz para representar las opciones del checkbox
interface optionsSearch {
  texto: string;
  icono: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

/* funcionalidad tipo checbox */
optionsSearch: optionsSearch[] = [
  { texto: 'Libros', icono: 'fa-book-copy fa-2xl', isChecked: false },
  { texto: 'Revistas', icono: 'fa-book-open fa-2xl', isChecked: false },
  { texto: 'Artículos/Capítulos', icono: 'fa-newspaper fa-2xl', isChecked: false },
  { texto: 'Dentro del contenido (PDFs)', icono: 'fa-file-pdf fa-2xl', isChecked: false },
];


  constructor() { }

  ngOnInit(): void {
  }



}
