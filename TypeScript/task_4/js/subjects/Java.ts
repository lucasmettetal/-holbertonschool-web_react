import { Subjects } from "./Teacher";
import { Subjects as SubjectNS } from "./Subject";

export namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends SubjectNS.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava === 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
