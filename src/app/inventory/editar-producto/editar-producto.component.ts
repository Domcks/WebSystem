import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ActivatedRoute,Router } from '@angular/router';
import { BackendApiService } from '../../service/backend-api.service';
@Component({
  selector: 'app-editar-producto',
  standalone: false,
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  producto: Producto=new Producto();
  id: number;
  constructor(
    private BackendApiServicio: BackendApiService,
     private ruta: ActivatedRoute,
      private enrutador: Router
    ){}

  ngOnInit(){
    this.id=this.ruta.snapshot.params['id'];
    this.BackendApiServicio.obtenerProductoPorId(this.id).subscribe(
      {
        next: (datos) => this.producto = datos
        ,
        error : (errores: any) => console.log(errores)
      }
    );
  }

  onSubmit(){
    this.guardarProducto();
  }
  guardarProducto(){
    this.BackendApiServicio.editarProducto(this.id,this.producto).subscribe(
      {
        next:(datos) => this.irProductoLista(),
        error:(errores) => console.log(errores)
      }
    );
  }

  irProductoLista(){
    this.enrutador.navigate(['/productos']);
  }
}
