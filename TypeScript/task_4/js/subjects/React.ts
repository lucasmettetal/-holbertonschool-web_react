import { Subjects } from "./Teacher";
import { Subjects as SubjectNS } from "./Subject";

export namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends SubjectNS.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact === 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
