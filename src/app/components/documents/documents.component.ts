import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../../domain/customer'
import { CustomerServi } from '../../service/customerservi.ts.service'
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
    customers!: Customer[];


    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = true;



    constructor(private customerServi: CustomerServi) {}

    ngOnInit() {
        this.customerServi.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach((customer) => (customer.date = new Date()));
        });

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Prestado', value: 'prestado' },
            { label: 'Biblioteca', value: 'biblioteca' },
            { label: 'Digital', value: 'digital' },


        ];
    }

    clear(table: Table) {
        table.clear();
    }

    getSeverity(status: string) {
      switch (status.toLowerCase()) {
        case 'prestado':
          return 'danger';

        case 'biblioteca':
          return 'warning';

        case 'digital':
          return 'info';

        default:
          return 'warning'; // o cualquier otro valor apropiado para un valor inesperado
      }
    }


}
