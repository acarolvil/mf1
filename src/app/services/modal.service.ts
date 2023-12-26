import { EventEmitter, Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    modalList: BehaviorSubject<Modal[]> = new BehaviorSubject<Modal[]>([]);
    browserRefresh: boolean;
    constructor(
        private router: Router,
        private location: Location,

    ) {
        this.browserRefresh = !router.navigated;
        this.router.events.subscribe(res => {
            // console.log('res', res)
            if (res instanceof NavigationStart) {
                this.browserRefresh = !router.navigated;
                // console.log('refreshed', this.browserRefresh, router.navigated)

            }
        })
    }


    voltar(where?: string[], options?: any) {
        if (where && where.length > 0) {
            this.router.navigate(where, options)
        } else {
            this.location.back();
        }
    }

    addModal(modal: Modal, where: string) {
        var list = this.modalList.value;

        var listOrderedById = list.sort((x,y) => x.id - y.id);
        var lastId = listOrderedById.length > 0 ? listOrderedById[listOrderedById.length - 1].id : 0;
        var newId = lastId + 1;
        modal.id = newId; 
        
        if (modal.activatedRoute?.snapshot.data['modalOrder']) {
            modal.modalOrder = modal.activatedRoute?.snapshot.data['modalOrder'] ?? 1;
        }
        
        list.push(modal);
        list = this.modalList.value.sort((x,y) => x.modalOrder - y.modalOrder);
        this.modalList.next(list);

        setTimeout(() => {
            this.openModalAnimation(newId);
        }, 300);

        return modal;
    }

    
    removeModal(id: number) {
        var list = this.modalList.value;
        var index = list.findIndex(x => x.id == id);
        if (index != -1) {
            this.removeModalAnimation(id);
            setTimeout(() => {
                var modal = list[index];
                list.splice(index, 1);
                this.modalList.next(list);
                this.voltar(modal.routerBack, modal.routerBackOptions);
            }, 10000);

        }
    }


    openModalAnimation(id: number) {
        $(`.modal[modal=${id}]`).addClass('active')
    }

    removeModalAnimation(id: number) {
        $(`.modal[modal=${id}]`).removeClass('active')
    }

}

export class Modal {
    id: number = 0;
    open: boolean = true;
    title: string = '';
    template?: TemplateRef<any>;
    icon?: TemplateRef<any>;
    style?: object = { 'max-width': '1000px' };
    routerBack?: string[] = [];
    routerBackOptions?: any;
    modalOrder: number;
    activatedRoute?: ActivatedRoute;
    onClose?: EventEmitter<boolean> = new EventEmitter<boolean>();
}
