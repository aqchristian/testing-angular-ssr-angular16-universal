import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from '../features/landing-page/user-list/user-list.component';
import { PostListComponent } from '../features/landing-page/post-list/post-list.component';
import { AlbumListComponent } from '../features/landing-page/album-list/album-list.component';
import { LandingPageComponent } from '../features/landing-page/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('../features/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
