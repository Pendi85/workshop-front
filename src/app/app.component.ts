import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar/Navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  connected : boolean;
  navbar : Navbar;
  
  constructor() {
    this.connected = false;
    this.navbar = new Navbar(this.connected);
  }

  ngOnInit(): void {
  }
}
