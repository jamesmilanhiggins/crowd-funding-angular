import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(input: Project[], categoryFilter): any {
    var output: Project[] = [];
    if(categoryFilter === "allProjects") {
      return input;
    }
    else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === categoryFilter) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
