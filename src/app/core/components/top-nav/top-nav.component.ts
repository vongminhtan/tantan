import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  collapsed = false;
  @Input() isCollapsed: boolean;

  constructor(private route: Router) { }

  onClickSignOut() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
