import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Table } from '../utils/table';
import { Invoice, Invoice_List } from '../models/invoice.model';
import { Response } from '../helpers/request-response.interface';
import { DatePipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {
    url = environment.url;
    list = new BehaviorSubject<Invoice_List[]>([]);
    object = new BehaviorSubject<Invoice>(new Invoice);

    constructor(
        private table: Table,
        private http: HttpClient,
        private toastr: ToastrService,
        private datePipe: DatePipe,
    ) {
    }


    getList() {
        this.table.loading.next(true);
        return this.http.get<Invoice_List[]>(`${this.url}/invoice`, { headers: new HttpHeaders({ 'loading': 'false' })})
        .pipe(tap({
            next: list => {
                list = list.map(x => {
                    x.dataInvoice = new Date(x.dataInvoice)
                    return x;
                })
                this.list.next(Object.assign([], list));
                return of(list);
            },
            error: res => this.toastr.error('Não foi possível carregar listagem de invoices.')
        }));
    }

    get(id: number) {
        return this.http.get<Invoice>(`${this.url}/invoice/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) }).pipe(tap({
            next: object => {
                this.object.next(Object.assign({}, object));
                return of(object);
            },
            error: res => this.toastr.error('Não foi possível carregar listagem de invoices.')
        }));
    }
    

    create(request: Invoice) {
        return this.http.post<Response>(`${this.url}/invoice`, request);
    }
    
    edit(request: Invoice) {
        return this.http.put<Response>(`${this.url}/invoice`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/invoice/${id}`);
    }


    file(id: number) {
        return this.http.post<Blob>(`${this.url}/invoice/${id}`, {})
        .pipe(tap({
            next: res => {
                var blob = new Blob([res], { type: 'application/pdf' })
                const data = window.URL.createObjectURL(blob);
    
                var link = document.createElement('a');
                link.href = data;
                link.download = `Invoice_${this.datePipe.transform(new Date(), 'yyyyMMddHHmmss')}`;
                // this is necessary as link.click() does not work on the latest firefox
                link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

                var url = URL.createObjectURL(res);
                window.open(url, '_blank');
                URL.revokeObjectURL(url);
            }
        }));
    }
}