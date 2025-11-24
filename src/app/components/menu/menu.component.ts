import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) {}

  menuItems = [
    { routeLink: '/home', label: 'Home' },      
    { routeLink: '/dashboard', label: 'Dashboard' },
  ];

  toggleCollapse(): void {
    this.changeIsCollapsed.emit(!this.isCollapsed);
  }

  closeMenu(): void {
    this.changeIsCollapsed.emit(true);
  }

  

  logout(): void {
    this.authService.logout();
    this.closeMenu(); 
    this.router.navigate(['/login']);      
  }


}
