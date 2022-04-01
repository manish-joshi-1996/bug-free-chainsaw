import { Component, OnInit } from '@angular/core';
import { MenubarService } from '../services/menubar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private menuService: MenubarService) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menuService.toggleMenuBar.next(true);
  }
}
