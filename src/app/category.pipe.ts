import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(input: Project[], categoryFilter, featuredFilter): any {
    var output: Project[] = [];
    var featuredOutput: Project[] = [];

    if(categoryFilter === "allProjects") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
    }

    else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === categoryFilter) {
          output.push(input[i]);
        }
      }
    }

    if(featuredFilter === "All") {
      featuredOutput = output;
    }

    else {
      for (var i = 0; i < output.length; i++) {
        if (output[i].featured === featuredFilter) {
          featuredOutput.push(output[i]);
        }
      }
    }

    return featuredOutput;
  }

}
