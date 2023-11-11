import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  deviceXs: boolean = false;
  menu: boolean = false;
  dropdown: boolean = false;
  url: string = '';
  constructor(
    private router: Router,
    private breakPointService: BreakpointObserver
  ) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.dropdown = false;
        this.menu = false;
        this.url = this.router.url;
      });
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.deviceXs = false;
      if (result.matches) {
        this.deviceXs = true;
      }
    });
  }
  toggleMenu() {
    this.menu = !this.menu;
  }
  openDropdown() {
    this.dropdown = true;
  }
  closeDropdown() {
    this.dropdown = false;
  }
}
