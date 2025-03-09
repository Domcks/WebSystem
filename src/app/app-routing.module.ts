import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './inventory/producto-list/producto-list.component';
import { EditarProductoComponent } from './inventory/editar-producto/editar-producto.component';

const routes: Routes = [
  { path: 'productos', component: ProductoListComponent },
  { path: 'editar-producto/:id', component: EditarProductoComponent }, 
// Esta pendiente definir la ruta por defecto, aqui es temporal
 // { path: '', redirectTo: '/productos', pathMatch: 'full' }, // Ruta por defecto
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
