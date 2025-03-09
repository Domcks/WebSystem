import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AgregarProductoComponent } from './inventory/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './inventory/editar-producto/editar-producto.component';
import { ProductoListComponent } from './inventory/producto-list/producto-list.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ProductoListComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
