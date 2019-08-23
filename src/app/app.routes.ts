import { RouterModule, Routes } from '@angular/router';
import { EmpanadasComponent } from './empanadas/empanadas.component';
import { ArepasComponent } from './arepas/arepas.component';
import { HumitasComponent } from './humitas/humitas.component';
import { PastelesComponent } from './pasteles/pasteles.component';
import { OtrosComponent } from './otros/otros.component';
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
import { PastelesPeruComponent } from './pasteles/pasteles-peru.component';
import { PastelesEcuadorComponent } from './pasteles/pasteles-ecuador.component';
import { PastelesParaguayComponent } from './pasteles/pasteles-paraguay.component';
import { PastelesBoliviaComponent } from './pasteles/pasteles-bolivia.component';
import { OtrosColombiaComponent } from './otros/otros-colombia.component';
import { OtrosPeruComponent } from './otros/otros-peru.component';
import { OtrosEcuadorComponent } from './otros/otros-ecuador.component';
import { OtrosParaguayComponent } from './otros/otros-paraguay.component';
import { OtrosBoliviaComponent } from './otros/otros-bolivia.component';
import { EmpanadasMundoComponent } from './empanadas/empanadas-mundo.component';
import { OtrosMundoComponent } from './otros/otros-mundo.component';
import { PastelesMundoComponent } from './pasteles/pasteles-mundo.component';
import { ArepasMundoComponent } from './arepas/arepas-mundo.component';
import { HumitasMundoComponent } from './humitas/humitas-mundo.component';

const APP_ROUTES: Routes = [
    {
        path: 'empanadas',
        component: EmpanadasComponent,
        children: [
            { path: 'empanadas-mundo', component: EmpanadasMundoComponent},
            { path: 'empanadas-colombia', component: EmpanadasColombiaComponent },
            { path: 'empanadas-peru', component: EmpanadasPeruComponent },
            { path: 'empanadas-ecuador', component: EmpanadasEcuadorComponent },
            { path: 'empanadas-paraguay', component: EmpanadasParaguayComponent },
            { path: 'empanadas-bolivia', component: EmpanadasBoliviaComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'empanadas-mundo' }
        ]
    },
    {
        path: 'arepas',
        component: ArepasComponent ,
        children: [
            { path: 'arepas-mundo', component: ArepasMundoComponent },
            { path: 'arepas-colombia', component: ArepasColombiaComponent },
            { path: 'arepas-peru', component: ArepasPeruComponent },
            { path: 'arepas-ecuador', component: ArepasEcuadorComponent },
            { path: 'arepas-paraguay', component: ArepasParaguayComponent },
            { path: 'arepas-bolivia', component: ArepasBoliviaComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'arepas-mundo' }
        ]
    },
    {
        path: 'humitas',
        component: HumitasComponent,
        children: [
            { path: 'humitas-mundo', component: HumitasMundoComponent },
            { path: 'humitas-colombia', component: HumitasColombiaComponent },
            { path: 'humitas-peru', component: HumitasPeruComponent },
            { path: 'humitas-ecuador', component: HumitasEcuadorComponent },
            { path: 'humitas-paraguay', component: HumitasParaguayComponent },
            { path: 'humitas-bolivia', component: HumitasBoliviaComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'humitas-mundo' }
        ]
    },
    {
        path: 'pasteles',
        component: PastelesComponent,
        children: [
            { path: 'pasteles-mundo', component: PastelesMundoComponent },
            { path: 'pasteles-colombia', component: PastelesColombiaComponent },
            { path: 'pasteles-peru', component: PastelesPeruComponent },
            { path: 'pasteles-ecuador', component: PastelesEcuadorComponent },
            { path: 'pasteles-paraguay', component: PastelesParaguayComponent },
            { path: 'pasteles-bolivia', component: PastelesBoliviaComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'pasteles-mundo' }
        ]
    },
    {
        path: 'otros',
        component: OtrosComponent,
        children: [
            { path: 'otros-mundo', component: OtrosMundoComponent },
            { path: 'otros-colombia', component: OtrosColombiaComponent },
            { path: 'otros-peru', component: OtrosPeruComponent },
            { path: 'otros-ecuador', component: OtrosEcuadorComponent },
            { path: 'otros-paraguay', component: OtrosParaguayComponent },
            { path: 'otros-bolivia', component: OtrosBoliviaComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'otros-mundo' }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'empanadas' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
