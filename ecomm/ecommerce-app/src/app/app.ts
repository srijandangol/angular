import { Component, signal } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss'] // ✅ fixed name and format
})
export class App {
  protected readonly title = signal('ecommerce-app');
  protected readonly showHeader = signal(true);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd) // ✅ type guard
      )
      .subscribe(event => {
        const hiddenHeaderRoutes = ['/add-product', '/update-product'];
        this.showHeader.set(
          !hiddenHeaderRoutes.some(route => event.urlAfterRedirects.startsWith(route))
        );
      });
  }
}
