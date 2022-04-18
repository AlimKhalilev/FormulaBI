import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AccordionComponent } from "./accordion/accordion.component";
import { FilterBoxComponent } from "./filter-box/filter-box.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ArticlesCardComponent } from "./articles-card/articles-card.component";
import { FilterTabComponent } from "./filter-tab/filter-tab.component";
import { ModalComponent } from "./modal/modal.component";
import { ModalTechSupportComponent } from "./modal/modal-tech-support/modal-tech-support.component";
import { ModalPasswordRestoreComponent } from "./modal/modal-password-restore/modal-password-restore.component";
import { FieldGroupComponent } from "./field-group/field-group.component";
import { ModalSuccessComponent } from "./modal/modal-success/modal-success.component";
import { ModalWriteMessageComponent } from "./modal/modal-write-message/modal-write-message.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AccordionComponent,
    FilterBoxComponent,
    FilterTabComponent,
    ArticlesCardComponent,
    FieldGroupComponent,
    ModalComponent,
    ModalTechSupportComponent,
    ModalPasswordRestoreComponent,
    ModalWriteMessageComponent,
    ModalSuccessComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AccordionComponent,
    FilterBoxComponent,
    FilterTabComponent,
    ArticlesCardComponent,
    FieldGroupComponent,
    ModalComponent,
    ModalTechSupportComponent,
    ModalPasswordRestoreComponent,
    ModalWriteMessageComponent,
    ModalSuccessComponent
  ],
})
export class ComponentsModule {}
