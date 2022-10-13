import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterQuests'
})
export class FilterQuestsPipe implements PipeTransform {

  transform(quests: any[], seeOnlyCompletedQuests : boolean): any[] {
    return seeOnlyCompletedQuests ? quests.filter((f) => f.completed == true) : quests;
  }

}
