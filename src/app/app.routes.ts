import { Routes } from '@angular/router';
import { Shopecomponent } from './shopcomponent/shopecomponent'; // Importe o componente

export const routes: Routes = [
  { path: 'shop', component: Shopecomponent }, // Aqui você diz: /shop -> Shopecomponent
  // adicione as outras rotas (about, contact) conforme criar os componentes
];
