import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookCatalogComponent } from './book-catalog.component';

const routes: Routes = [ { path: '', component: BookCatalogComponent } ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class BookCatalogRoutingModule {
}
