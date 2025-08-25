import { Component, signal } from '@angular/core';

/**
 * App Component - Root component of the Angular application
 * Serves as the main container for the entire application
 * Contains the router outlet and shared header component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  /** Application title using Angular signals */
  protected readonly title = signal('ngrx-effects');
}
