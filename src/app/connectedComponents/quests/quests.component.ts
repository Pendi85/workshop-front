import { Component, OnInit } from '@angular/core';
import questsJson from '../../data/quests.json';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent implements OnInit {
  quests : any[];
  seeOnlyCompletedQuests : boolean;

  constructor() { 
    this.quests = questsJson;
    this.seeOnlyCompletedQuests = false;
  }

  toggleQuests() {
    this.seeOnlyCompletedQuests = !this.seeOnlyCompletedQuests;
  }

  ngOnInit(): void {
    
  }

}
