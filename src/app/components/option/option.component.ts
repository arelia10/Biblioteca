import { Component, OnInit } from '@angular/core';
import{Libro} from './libros.component'

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],

})
export class OptionComponent implements OnInit {
  first: number = 0;

  rows: number = 10;

  libros: Libro[] = [
    {
      titulo: 'MIRANDA Y AMADO',
      autor: 'LABORAL BUROCRATICO',
      editorial: 'Alfaguara',
      lugarPublicacion: 'Lima',
      edicion: 'Primera',
      ano: 2015,
      temas: ['tema1', 'tema2', 'tema3'],
      digital: false,
      imagenes:["https://images.cdn1.buscalibre.com/fit-in/360x360/8b/d1/8bd18c7e0dd2a7ab09f61156e2d1f5f5.jpg"],
      tipo:"libro"
    },
    {
      titulo: 'GÓMEZ PINZÓN',
      autor: 'VISION LÓGICA DEL DERECHO',
      editorial: 'Alfaguara',
      lugarPublicacion: 'Bogotá',
      edicion: 'Segunda',
      ano: 2017,
      temas: ['tema1', 'tema2', 'tema3'],
      digital: true,
      imagenes: ["https://www.plazayvaldes.es/uploads/2017/09/resized/360_978-84-17121-06-8.jpg"],
      tipo:"libro"
    },
    {
      titulo: 'TOMAS ALVAREZ',
      autor: 'TEMAS DE DERECHO',
      editorial: 'Alfaguara',
      lugarPublicacion: 'Buenos Aires',
      edicion: 'Tercera',
      ano: 2019,
      temas: ['tema1', 'tema2', 'tema3'],
      digital: false,
      imagenes: ["https://edinumen.es/images/stories/virtuemart/product/TEMAS_DE_DERECHO_4bf3bc11ad39f.gif"],
      tipo:"libro"
    },
    {
      titulo: 'MIJARES ANGOITIA',
      autor: 'ESTUDIOS DE DERECHO CIVIL',
      editorial: 'Alfaguara',
      lugarPublicacion: 'México',
      edicion: 'Cuarta',
      ano: 2021,
      temas: ['tema1', 'tema2', 'tema3'],
      digital: true,
      imagenes: ["http://www.uco.es/servicios/comunicacion/media/k2/items/cache/b25b23617988c9a00b9c13f35d3eee05_M.jpg"],
      tipo:"libro"
    },

    {
      titulo: "DERECHO",
      autor: "JOSE FORTUÑO",
      editorial: "Alfaguara",
      lugarPublicacion: "Desconocido",
      edicion: "Edición",
      ano: 2015,
      temas: ["tema1", "tema2", "tema3"],
      digital: true,
      imagenes: ["https://edwinfigueroag.files.wordpress.com/2018/02/portada-de-libro-debida-motivacion.jpg?w=734"],
      tipo: "Árticulo"
    },

    {
      titulo: "TRABAJO FINAL",
      autor: "ANGELA ASTURIAS",
      editorial: "Alfaguara",
      lugarPublicacion: "Desconocido",
      edicion: "Edición",
      ano: 2015,
      temas: ["tema1", "tema2", "tema3"],
      digital: true,
      imagenes: ["https://marketplace.canva.com/EAFO3UEIm8g/1/0/1131w/canva-documento-a4-portada-trabajo-final-de-carrera-pastel-PXZgWeuMreg.jpg"],
      tipo: "Revista"
      }

];


onPageChange(event:any) {
  this.first = event.first;
  this.rows = event.rows;
}





  constructor() { }

  ngOnInit(): void {
  }







}
