import { Component, OnInit } from '@angular/core';
import successJson from '../../data/success.json';
import informationsEmployeeJson from '../../data/informations_employee.json';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  successList : any[];
  employeeData : any;

  constructor() {
    this.successList = successJson;
    this.employeeData = informationsEmployeeJson;
  }

  ngOnInit(): void {
  }

  getUrlIconRank() : string {
    return "";
  }
}
