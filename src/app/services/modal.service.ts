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
                console.log('refreshed', this.browserRefresh, router.navigated)

            }
        })
    }


    voltar(where?: string[], options?: any) {
        console.log('voltar')
        if (where && where.length > 0) {
            this.router.navigate(where, options)
        } else {
            this.location.back();
        }
    }

    addModal(modal: Modal, where: string) {
        console.log('addModal', where)
        var list = this.modalList.value;

        var a = list.sort((x,y) => x.id - y.id);
        var lastId = a.length > 0 ? a[a.length - 1].id : 0;
        var newId = lastId + 1;
        modal.zindex = newId;
        modal.id = newId; 
        list.push(modal);
        if (this.browserRefresh) 
            list = this.modalList.value.sort((x,y) => y.id - x.id);
        // else 
        //     list = this.modalList.value.sort((x,y) => x.id - y.id);


        console.log(list)
        this.modalList.next(list);

        setTimeout(() => {
            this.openModalAnimation(newId);
        }, 300);

        return modal;
    }

    
    removeModal(id: number) {
        console.log('removeModal')
        var list = this.modalList.value;
        var index = list.findIndex(x => x.id == id);
        if (index != -1) {
            this.removeModalAnimation(id);
            setTimeout(() => {
                var modal = list[index];
                list.splice(index, 1);
                this.modalList.next(list);
                this.voltar(modal.routerBack, modal.routerBackOptions);
            }, 300);

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
    zindex: number = 0;
    open: boolean = true;
    title: string = '';
    template?: TemplateRef<any>;
    icon?: TemplateRef<any>;
    style?: object = { 'max-width': '1000px' };
    routerBack?: string[] = [];
    routerBackOptions?: any;
    activatedRoute?: ActivatedRoute;
    onClose?: EventEmitter<boolean> = new EventEmitter<boolean>();
}

