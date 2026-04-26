import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hcomponent.html', // Indica o caminho do HTML
  styleUrls: ['./hcomponent.css']    // Indica o caminho do CSS
})
export class HeaderComponent {}