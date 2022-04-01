import { Component, OnInit } from '@angular/core';
import { MenubarService } from '../services/menubar.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css'],
})
export class SidenavbarComponent implements OnInit {
  visible: boolean = false;
  constructor(private menuDataService: MenubarService) {}

  ngOnInit(): void {
    var that = this;
    this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
      if (data && data != null) {
        that.visible = !that.visible;
      }
    });
  }
}
