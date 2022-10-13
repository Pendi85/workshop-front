import { Component, OnInit } from '@angular/core';
import successJson from '../../data/success.json';
import informationsEmployeeJson from '../../data/informations_employee.json';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  successList: any[];
  employeeData: any;
  assetsFolderUrl: string;

  constructor() {
    this.successList = successJson;
    this.employeeData = informationsEmployeeJson;
    this.assetsFolderUrl = "../../../assets/";
  }

  ngOnInit(): void {
  }

  getUrlIconRank(rank: number): string {
    let url: string = "";
    switch (rank) {
      case 1:
        url = this.assetsFolderUrl + "ranking_1.png";
        break;
      case 2:
        url = this.assetsFolderUrl + "ranking_2.png";
        break;
      case 3:
        url = this.assetsFolderUrl + "ranking_3.png";
        break;
      default:
        url = this.assetsFolderUrl + "ranking_4.png";
    }

    return url;
  }

  getUrlIconHierarchy(level: string): string {
    let url: string = "";
    switch (level) {
      case "CEO":
        url = this.assetsFolderUrl + "badges_4.png";
        break;
      case "Manager":
        url = this.assetsFolderUrl + "badges_3.png";
        break;
      case "Employee":
        url = this.assetsFolderUrl + "badges_2.png";
        break;
      default: //Intern
        url = this.assetsFolderUrl + "badges_1.png";
    }

    return url;
  }

  getUrlIconDepartment(department: string): string {
    let url: string = "";
    switch (department) {
      case "Marketing":
        url = this.assetsFolderUrl + "marketing.png";
        break;
      case "Accounting":
        url = this.assetsFolderUrl + "compta.png";
        break;
    }

    return url;
  }
}
