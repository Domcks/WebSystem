import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../inventory/producto';
@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
private urlBase="http://localhost:6969/inventario-app/productos";

//private credentials = btoa('admin:admin123'); // Codifica las credenciales en Base64
//private httpHeaders = new HttpHeaders({
//  'Authorization': 'Basic ' + this.credentials // Cabecera de autenticación
//});

  constructor(private clienteHttp: HttpClient) { }
  /*obtenerProductoLista(): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(this.urlBase, { headers: this.httpHeaders });
  }

  agregarProducto(producto: Producto): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, producto, { headers: this.httpHeaders });
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`, { headers: this.httpHeaders });
  }

  editarProducto(id: number, producto: Producto): Observable<Object> {
    return this.clienteHttp.put(`${this.urlBase}/${id}`, producto, { headers: this.httpHeaders });
  }

  eliminarProducto(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`, { headers: this.httpHeaders });
  }*/  

  obtenerProductoLista(): Observable<Producto[]>{    
    return this.clienteHttp.get<Producto[]>(this.urlBase)
  }
  agregarProducto(producto:Producto):Observable<Object>{
    return this.clienteHttp.post(this.urlBase, producto);
  }
  obtenerProductoPorId(id: number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
  }
  editarProducto(id: number, producto: Producto):  Observable<object>{
    return this.clienteHttp.put(`${this.urlBase}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
