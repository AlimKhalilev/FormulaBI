import { ElementRef, Inject, Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    modalNames = {
        REGISTRATION: "modal-registration",
        WRITE_MESSAGE: "modal-write-message",
        CONSULT: "modal-consult",
        TECH_SUPPORT: "modal-tech-support",
        PASSWORD_RESTORE: "modal-password-restore",
        SUCCESS: "modal-success"
    }

    isModalVisible: boolean = false; // открыто ли какое-либо модальное окно
    currentOpenedModalId: number = -1;
    currentOpenedModalName: string = "";
    overlay!: ElementRef;
    modalList!: ElementRef[];

    constructor() {}

    toggleOverlay(): void {
        this.overlay?.nativeElement.classList.toggle("visible");
    }

    show(name: string): void {
        if (this.isModalVisible) { // если уже открыта какая-то модалка
            if (name === this.currentOpenedModalName) { // если открываемое окно совпадает с текущим окном
                console.error("Вы пытаетесь заново открыть текущее окно!");
            }
            else {
                this.close(); // закрыть текущее модальное окно, и открыть новое через 700 мс
                setTimeout(() => this.show(name), 700);
            }
        }
        else {
            this.modalList?.forEach((item, id) => {
                if (item.nativeElement.getAttribute("name") === name) {
                    this.toggleOverlay();
                    item.nativeElement.classList.add("visible");
                    this.currentOpenedModalId = id;
                    this.currentOpenedModalName = name;
                    this.isModalVisible = true;
                }

                if (((this.modalList.length - 1) === id) && (this.isModalVisible === false)) { // если не найдено окно по имени
                    console.error("Открываемое модальное окно не найдено!");
                }
            }); 
        }
    }

    close(): void {
        if (this.isModalVisible) {
            this.modalList[this.currentOpenedModalId].nativeElement.classList.remove("visible");
            this.toggleOverlay();
            this.currentOpenedModalId = -1;
            this.currentOpenedModalName = "";
            this.isModalVisible = false;
        }
        else {
            console.error("Активное модальное окно отсутствует!");
        }
    }
}