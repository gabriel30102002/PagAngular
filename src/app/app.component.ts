import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './shared/logo/logo.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterPageComponent } from './shared/footerpage/footerpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, LogoComponent, MenuComponent, FooterPageComponent]
})
export class AppComponent {}
