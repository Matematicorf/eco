import { Component } from '@angular/core';
import { HeaderComponent } from './hcomponent/hcomponent';
import { RouterModule } from '@angular/router'; // 1. Adicione este import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule], // 2. Adicione o RouterModule aqui
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet> `
})
export class App {}