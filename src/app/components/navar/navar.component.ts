import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.css']
})
export class NavarComponent {

  items!: MenuItem[];



  ngOnInit() {
      this.items = [

        {
          label: 'Administrador',
          icon: 'fa-solid fa-user-large ',

          items: [
            {
              label: 'Perfil',
              icon: 'pi pi-fw pi-user-plus'
            },
            {
              label: 'Favoritos',
              icon: 'fa-sharp fa-solid fa-star',
              routerLink: '/result',
            },


            {
              label: 'Configuraciones',
              icon: 'fa-duotone fa-sliders',
              routerLink: '/result',

            },

            {
              label: 'Cerrar sesión',
              icon: 'fa-duotone fa-right-from-bracket ',
              routerLink: '/search',

            }
          ]
        }


      ];
  }
}

