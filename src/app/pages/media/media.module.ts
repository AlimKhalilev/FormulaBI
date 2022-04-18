import { MediaPageRoutingModule } from './media-routing.module';
import { MediaPage } from './media.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { MediaNewsComponent } from './media-news/media-news.component';
import { MediaEventsComponent } from './media-events/media-events.component';
import { MediaQuestionsComponent } from './media-questions/media-questions.component';
import { MediaArticlesComponent } from './media-articles/media-articles.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';
import { MediaLibraryComponent } from './media-library/media-library.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MediaPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [
    MediaPage, 
    MediaNewsComponent,
    MediaEventsComponent,
    MediaQuestionsComponent,
    MediaArticlesComponent,
    MediaGalleryComponent,
    MediaLibraryComponent
  ],
})
export class MediaPageModule {

}