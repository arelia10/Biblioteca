import { Component, OnInit, ViewChild,OnDestroy} from '@angular/core';
import { Product,Modal } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/demo/service/product.service';
import { FormGroup,Validators,FormBuilder,  } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { CountryService } from 'src/app/demo/service/country.service';
import { SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';


interface Areas {
  name: string,
  code: string
}
interface Country {
  name: string;
  code: string;
}

@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService,DialogService,],

     styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload!: FileUpload;


  countries!: Country[];
  selectedCountries!: Country[];

  date!: Date;
  checked!: boolean;
    productDialog: boolean = false;
    modalDialog:boolean=false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: Product[] = [];

    product: Product = {};
    modal:Modal={}

    selectedProducts: Product[] = [];

    submitted: boolean = false;
    SubmittedModal:boolean=false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    //primera ventana modal
    formSubject!: FormGroup;

    document:any[]=[];
    laws:any[]=[];
    area:any[]=[];
    selectedMulti: any[] = [];
    cities: SelectItem[] = [];
    paymentOptions: any[] = [];
    filteredCountries: any[] = [];
    selectedCountryAdvanced: any[] = [];
    tesauroTematico:any[]=[]
    campos: any[] = [];
    celdas = [{
      opcion: null,
      busqueda: ''
    }];
  //Autores
  authors !: Areas[];
  selectedAuthors!: Areas[];
  acquisition:any[]=[];
  selectedCompilador!: Areas[];
  compilador:any[]=[];
  selectedEditores!: Areas[];
  editores:any[]=[];
  selectedDirectores!: Areas[];
  directores:any[]=[];
  selectedCoordinador!: Areas[];
  coordinador:any[]=[];
  money:any[]=[];
  digitizer:any[]=[];
  edition:any[]=[]
  match:any[]=[];
  editorial:any[]=[];
   //ocultar campos
   stateBook: boolean = false;
   stateMagazine: boolean = false;
   stateChapte:boolean = false;
   stateArticle:boolean = false;
   stateDocumentelec:boolean = false;
   showSubject: boolean = true;





    constructor(private productService: ProductService, private messageService: MessageService,private formBuilder: FormBuilder,private countryService: CountryService ) { }
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




    show(){
      this.modal = {};
      this.SubmittedModal = false;
      this.modalDialog = true;
    }
    molDialog() {
      this.SubmittedModal = false;
      this.modalDialog =false;
  }




    ngOnInit() {
      this.countryService.getCountries().then(countries => {
        this.countries = countries;
    });
      this.initFromSubject();
        this.productService.getProducts().then(data => this.products = data);

        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'name', header: 'name' },
            { field: 'area', header: 'area' },
            { field: 'code', header: 'code' },
            { field: 'author', header: 'author' },
            { field: 'category', header: 'Category' },
            { field: 'editorial', header: 'editorial' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
          { label: 'BIBLIOTECA', value: 'biblioteca' },
            { label: 'PRESTADO', value: 'prestado' },
            { label: 'PERDIDO', value: 'digital' },
        ];


      //ventanas modales
      this.document= [

        { id: 1, valor: 'Libro' },
        { id: 2, valor: 'Revista' },
        { id: 3, valor: 'Capítulo de libro' },
        { id: 4, valor: 'Árticulo de revista' },
        { id: 5, valor: 'Documento electrónico' },
      ];
      this.laws=[

        { id: 0, valor: 'Filosofía del derecho (A)' },
        { id: 1, valor: 'Administración de estudios de abogados (B)' },
        { id: 2, valor: 'Libros homenaje (C)' },
        { id: 3, valor: 'Derechos económico (D)' },
        { id: 5, valor: 'Documento Virtual (DV)' },
        { id: 6, valor: 'Documento Virtual (E)' },
      ]

      this.area = [

        { id: 0, valor: 'Corporativo' },
        { id: 1, valor: 'Disputas' },
        { id: 2, valor: 'inmobiliario' },
        { id: 3, valor: 'Financiero' },
        { id: 4, valor: 'Laboral' },
        { id: 5, valor: 'Proyectos' },
        { id: 6, valor: 'Regulario' },
        { id: 7, valor: 'Tributario' },
        { id: 8, valor: 'Innovación Legal ' },
      ];


  this.tesauroTematico= [

    { id: 0, valor: 'Abandono de la propiedad' },
    { id: 1, valor: 'Abandono de puesto de trabajo' },
    { id: 2, valor: 'Abandono del proceso' },
    { id: 3, valor: 'Abandono legal de mercancias' },
    { id: 4, valor: 'Abigeato' },
    { id: 5, valor: 'Abogados' },
    { id: 6, valor: 'Aborto' },
    { id: 7, valor: 'Abuso del derecho' },
    { id: 8, valor: 'Accesion' },
  ];
  // libros
  this.authors= [
    {name: 'LINDSEY,David', code: 'LD'},
    {name: 'Aba ,Catoira', code: 'AC'},
    {name: 'Abab, Cancho', code: 'ACA'},
    {name: 'Abab ,Saldaña', code: 'AS'},
    {name: 'Abab, Yupanqui', code: 'AY'}
];
this.compilador= [
  {name: 'LINDSEY,David', code: 'LD'},
  {name: 'Aba ,Catoira', code: 'AC'},
  {name: 'Abab, Cancho', code: 'ACA'},
  {name: 'Abab ,Saldaña', code: 'AS'},
  {name: 'Abab, Yupanqui', code: 'AY'}
];
this.editores= [
  {name: 'LINDSEY,David', code: 'LD'},
  {name: 'Aba ,Catoira', code: 'AC'},
  {name: 'Abab, Cancho', code: 'ACA'},
  {name: 'Abab ,Saldaña', code: 'AS'},
  {name: 'Abab, Yupanqui', code: 'AY'}
];this.directores= [
  {name: 'LINDSEY,David', code: 'LD'},
  {name: 'Aba ,Catoira', code: 'AC'},
  {name: 'Abab, Cancho', code: 'ACA'},
  {name: 'Abab ,Saldaña', code: 'AS'},
  {name: 'Abab, Yupanqui', code: 'AY'}
];
this.coordinador= [
  {name: 'LINDSEY,David', code: 'LD'},
  {name: 'Aba ,Catoira', code: 'AC'},
  {name: 'Abab, Cancho', code: 'ACA'},
  {name: 'Abab ,Saldaña', code: 'AS'},
  {name: 'Abab, Yupanqui', code: 'AY'}
];





 // Adquisición
   this.acquisition=[
    { id: 0, valor: 'Compra' },
    { id: 1, valor: 'Donación' },
    { id: 2, valor: 'Descarga Gratuita' },
    { id: 3, valor: 'Suscripción' },
    { id: 4, valor: 'Reprocesamiento' },
    { id: 5, valor: 'Digitalización' },
    { id: 6, valor: 'Pendiente de compra' },
    { id: 6, valor: 'Publicidad' },
   ]

   //money
   this.money=[
    { id: 0, valor: 'Soles' },
    { id: 1, valor: 'Dólares' },
   ]
   this.digitizer=[
    { id: 0, valor: 'Proveedor externo' },
    { id: 1, valor: 'Biblioteca' },
   ]

   this.edition=[
    { id: 0, valor: '1°.ed' },
    { id: 1, valor: '2°.ed' },
    { id: 2, valor: '3°.ed' },
    { id: 3, valor: '4°.ed' },
  ]

  this.match=[
    { id: 0, valor: 'Y-393' },
    { id: 1, valor: 'Y-392' },
    { id: 2, valor: 'Y-391' },
    { id: 3, valor: 'W-50' },
    { id: 3, valor: 'L-421' },
  ]
  this.editorial=[
    { id: 0, valor: 'Ábaco' },
    { id: 1, valor: 'Ábaco de Rodolfo' },
    { id: 2, valor: 'Abeledo-Perrot' },
    { id: 3, valor: 'Academia de la Magistratura' },
    { id: 3, valor: 'Acento Editorial' },
  ]


    }
    filterCountry(event: any) {
      const filtered: any[] = [];
      const query = event.query;
      for (let i = 0; i < this.countries.length; i++) {
          const country = this.countries[i];
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(country);
          }
      }

      this.filteredCountries = filtered;
  }






    initFromSubject() {
      this.formSubject = this.formBuilder.group({
        coCliente: [null],
        coPais: [null, Validators.required],
        txRuc: [''],
        txRazonSocial: ['', [Validators.required]],
        txNombreComercial: ['', Validators.required],
        txDireccionFiscal: ['', Validators.required],
        txTaxId: ['', Validators.pattern('^[0-9]*$')],
        flReferidoAffinitas: [null],
        txReferidoPor: [''],
      })
      }




    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.product = { ...product };
    }

     confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.products = this.products.filter(val => val.id !== this.product.id);
        this.messageService.add({ severity: 'error', summary: 'Eliminación exitosa', detail: 'Archivo Eliminado', life: 3000 });
        this.product = {};
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'Info', summary: 'Edición Exitosa', detail: 'Archivo Editado', life: 3000 });
            } else {
                this.product.id = this.createId();
                this.product.code = this.createId();
                this.product.area = this.createId();
                this.product.author = this.createId();
                this.product.quote = this.createId();
                this.product.editorial = this.createId();
                this.product.date = this.createId();
                this.product.city = this.createId();
                this.product.edition = this.createId();
                this.product.volume = this.createId();
                this.product.postdate = this.createId();
                this.product.digitaldate = this.createId();
                this.product.digitizer = this.createId();
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products.push(this.product);
                this.messageService.add({ severity: 'Success', summary: 'Creación exitosa', detail: 'Archivo Creado', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
            this.resetValuesInitial();
        }
    }
    resetValuesInitial() {
      this.stateBook = false;
      this.stateMagazine =false;
      this.showSubject = true;

    }


    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    remove(file: any) {
      this.fileUpload.remove(file, this.fileUpload.files.indexOf(file));
    }


    showReferredAffinitas(id: number) {
      if (id == 1) {

        this.stateBook = true;
      }else{
        this.stateBook = false}



      if(id==2) {

        this.stateMagazine = true;
      } else{
        this.stateMagazine = false;
      }
      if(id==3) {

        this.stateChapte = true;
      } else{
        this.stateChapte = false;
      }
      if(id==4) {

        this.stateArticle = true;
      }  else{
        this.stateArticle = false;
      }
      if(id==5) {

        this.stateDocumentelec = true;
      } else{
        this.stateDocumentelec = false;
      }


    }





}

