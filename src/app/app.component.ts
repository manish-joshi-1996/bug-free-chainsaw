import { Component, OnInit } from '@angular/core';
import { AppStateService } from './services/app-state.service';
import { MenubarService } from './services/menubar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'primengtask';
  isMenuVisible: boolean = false;  
  constructor(
    private menuDataService: MenubarService,
    private applicationStateService: AppStateService
  ) {}
  ngOnInit() {
    var that = this;
    this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
      debugger
      if (data && data != null) {
        that.isMenuVisible = !that.isMenuVisible;
      }
    });

    if (this.applicationStateService.getIsMobileResolution()) {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }
}
