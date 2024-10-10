import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    UserListComponent,
    PostListComponent,
    AlbumListComponent,
  ],
  imports: [CommonModule, LandingPageRoutingModule],
})
export class LandingPageModule {}
