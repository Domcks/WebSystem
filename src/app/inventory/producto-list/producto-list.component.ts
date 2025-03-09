import { Component } from '@angular/core';
import { BackendApiService } from '../../service/backend-api.service';
import { Producto } from '../producto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-producto-list',
  standalone: false,
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent {
  productos: Producto[];
  constructor(private BackendApiServicio: BackendApiService, private enrutador: Router){}
  ngOnInit(){
    this.obtenerProductos();
  }
  private obtenerProductos(){
    this.BackendApiServicio.obtenerProductoLista().subscribe(
      (datos => {
         this.productos = datos;

      })
    );
  }

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id]);
  }

  eliminarProducto(id: number){
    this.BackendApiServicio.eliminarProducto(id).subscribe(
      {
        next:(datos) => this.obtenerProductos(),
        error: (errores) => console.log(errores)
      }
    );
  }
}
