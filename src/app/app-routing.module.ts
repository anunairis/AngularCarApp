import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: "", component: CustomerComponent
  },
  {
    path: "about", component: AboutPageComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "gallery", component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
