import { RouterModule, Routes } from '@angular/router';
import { EmpanadasComponent } from './empanadas/empanadas.component';
import { ArepasComponent } from './arepas/arepas.component';
import { HumitasComponent } from './humitas/humitas.component';
import { PastelesComponent } from './pasteles/pasteles.component';
import { OtrosComponent } from './otros/otros.component';

const APP_ROUTES: Routes = [
    { path: 'empanadas', component: EmpanadasComponent },
    { path: 'arepas', component: ArepasComponent },
    { path: 'humitas', component: HumitasComponent },
    { path: 'pasteles', component: PastelesComponent },
    { path: 'otros', component: OtrosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'empanadas' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
