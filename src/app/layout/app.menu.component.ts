import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.scss'],
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [

            {
                label: 'Biblioteca',
                items: [
                    { label: 'Adquisiciones', icon: 'fa-duotone fa-book-blank',routerLink: ['/pages/crud']},
                    { label: 'Editoriales', icon: 'fa-duotone fa-book-blank',routerLink: ['']},

                    { label: 'Asociación de normas', icon: 'fa-duotone fa-book-blank',routerLink: ['']},
                    { label: 'Autores', icon: 'fa-duotone fa-book-blank',routerLink: ['']},

                    { label: 'Sinónimos', icon: 'fa-duotone fa-book-blank',routerLink: ['']},
                    { label: 'Tesauro Normativo', icon: 'fa-duotone fa-book-blank',routerLink: ['']},
                    { label: 'Tesauro Tematico', icon: 'fa-duotone fa-book-blank',routerLink: ['']},
                  ]


            },

        ];
    }
}
