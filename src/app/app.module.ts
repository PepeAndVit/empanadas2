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
import { BodyComponent } from './body/body.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ColombiaComponent } from './empanadas/colombia.component';
import { PeruComponent } from './empanadas/peru.component';
import { EcuadorComponent } from './empanadas/ecuador.component';
import { ParaguayComponent } from './empanadas/paraguay.component';
import { BoliviaComponent } from './empanadas/bolivia.component';
import { EmpanadasColombiaComponent } from './empanadas/empanadas-colombia.component';
import { EmpanadasPeruComponent } from './empanadas/empanadas-peru.component';
import { EmpanadasEcuadorComponent } from './empanadas/empanadas-ecuador.component';
import { EmpanadasParaguayComponent } from './empanadas/empanadas-paraguay.component';
import { EmpanadasBoliviaComponent } from './empanadas/empanadas-bolivia.component';
import { ArepasColombiaComponent } from './arepas/arepas-colombia.component';
import { ArepasPeruComponent } from './arepas/arepas-peru.component';
import { ArepasEcuadorComponent } from './arepas/arepas-ecuador.component';
import { ArepasParaguayComponent } from './arepas/arepas-paraguay.component';
import { ArepasBoliviaComponent } from './arepas/arepas-bolivia.component';
import { HumitasColombiaComponent } from './humitas/humitas-colombia.component';
import { HumitasPeruComponent } from './humitas/humitas-peru.component';
import { HumitasEcuadorComponent } from './humitas/humitas-ecuador.component';
import { HumitasParaguayComponent } from './humitas/humitas-paraguay.component';
import { HumitasBoliviaComponent } from './humitas/humitas-bolivia.component';
import { PastelesColombiaComponent } from './pasteles/pasteles-colombia.component';
import { PastelePeruComponent } from './pasteles/pastele-peru.component';
import { PasteleEcuadorComponent } from './pasteles/pastele-ecuador.component';
import { PastelesParaguayComponent } from './pasteles/pasteles-paraguay.component';
import { PastelesBoliviaComponent } from './pasteles/pasteles-bolivia.component';
import { PastelesPeruComponent } from './pasteles/pasteles-peru.component';
import { PastelesEcuadorComponent } from './pasteles/pasteles-ecuador.component';
import { OtrosColombiaComponent } from './otros/otros-colombia.component';
import { OtrosPeruComponent } from './otros/otros-peru.component';
import { OtrosEcuadorComponent } from './otros/otros-ecuador.component';
import { OtrosParaguayComponent } from './otros/otros-paraguay.component';
import { OtrosBoliviaComponent } from './otros/otros-bolivia.component';

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
    FooterComponent,
    BodyComponent,
    SubmenuComponent,
    ColombiaComponent,
    PeruComponent,
    EcuadorComponent,
    ParaguayComponent,
    BoliviaComponent,
    EmpanadasColombiaComponent,
    EmpanadasPeruComponent,
    EmpanadasEcuadorComponent,
    EmpanadasParaguayComponent,
    EmpanadasBoliviaComponent,
    ArepasColombiaComponent,
    ArepasPeruComponent,
    ArepasEcuadorComponent,
    ArepasParaguayComponent,
    ArepasBoliviaComponent,
    HumitasColombiaComponent,
    HumitasPeruComponent,
    HumitasEcuadorComponent,
    HumitasParaguayComponent,
    HumitasBoliviaComponent,
    PastelesColombiaComponent,
    PastelePeruComponent,
    PasteleEcuadorComponent,
    PastelesParaguayComponent,
    PastelesBoliviaComponent,
    PastelesPeruComponent,
    PastelesEcuadorComponent,
    OtrosColombiaComponent,
    OtrosPeruComponent,
    OtrosEcuadorComponent,
    OtrosParaguayComponent,
    OtrosBoliviaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
