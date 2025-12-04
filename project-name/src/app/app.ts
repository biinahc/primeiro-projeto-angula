import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
// import { Apresentacao } from './components/apresentacao/apresentacao';
import { Descricao } from './components/descricao/descricao';
import { Header } from './components/header/header';
import { Titulo } from './components/titulo/titulo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
  Navbar,
  Header,
  // Apresentacao,
  Descricao,
  
  Titulo
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-name');
}
