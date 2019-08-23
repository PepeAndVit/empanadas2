import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios


// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmpanadasComponent } from './empanadas/empanadas.component';
import { ArepasComponent } from './arepas/arepas.component';
import { HumitasComponent } from './humitas/humitas.component';
import { PastelesComponent } from './pasteles/pasteles.component';
import { OtrosComponent } from './otros/otros.component';
import { PaisesComponent } from './components/paises/paises.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpanadasComponent,
    ArepasComponent,
    HumitasComponent,
    PastelesComponent,
    OtrosComponent,
    PaisesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
