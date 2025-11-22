import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Input({ required: true }) isCollapsed!: boolean;
  @Output() changeIsCollapsed = new EventEmitter<boolean>();

  menuItems = [
    { routeLink: 'home', label: 'Home' },
    { routeLink: 'dashboard', label: 'Dashboard' },
  ];

  toggleCollapse(): void {
    this.changeIsCollapsed.emit(!this.isCollapsed);
  }

  closeMenu(): void {
    this.changeIsCollapsed.emit(true);
  }
}
