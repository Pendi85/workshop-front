import { Component, OnInit } from '@angular/core';
import stuffsJson from '../../data/stuffs.json';

@Component({
  selector: 'app-stuffs',
  templateUrl: './stuffs.component.html',
  styleUrls: ['./stuffs.component.css']
})
export class StuffsComponent implements OnInit {
  stuffs : any[];

  constructor() { 
    this.stuffs = stuffsJson;
  }
  
  ngOnInit(): void {
  }

}
