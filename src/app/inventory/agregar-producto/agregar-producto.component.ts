import { Component } from '@angular/core';
import { Producto } from '../producto';
import { BackendApiService } from '../../service/backend-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  standalone: false,
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  producto:Producto = new Producto();

  constructor(private BackendApiServicio: BackendApiService,
    private enrutador: Router){}

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.BackendApiServicio.agregarProducto(this.producto).subscribe(
      {
        next:(datos) => {
          this.irListaProductos();
        },
        error: (error:any) => {console.log(error)}
      }
    );
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos'])
  }
}
