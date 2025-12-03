import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Apresentacao } from './components/apresentacao/apresentacao';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
  Navbar,
  Apresentacao
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-name');
}
