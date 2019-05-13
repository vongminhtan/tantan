import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent {

  collapsed = false;

  @Output() toogleNav: EventEmitter<boolean> = new EventEmitter();

  navigation = [
    {
      name: 'Dashboard',
      link: '',
      icon: 'fas fa-home'
    },
    {
      name: 'Users',
      link: 'users',
      icon: 'fas fa-user-friends'
    },
  ];

  toogle() {
    this.collapsed = !this.collapsed;
    this.toogleNav.emit(this.collapsed);
  }

}
