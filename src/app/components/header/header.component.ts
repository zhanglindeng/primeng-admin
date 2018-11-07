import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleHide = false;

  @Output() onToggleSidenav: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.toggleHide = !this.toggleHide;
    this.onToggleSidenav.emit(this.toggleHide);
  }

}
