import { v4 as uuidv4 } from 'uuid';

export class ProfessionalExperience {
  id: string;
  name: string;
  details: string[];
  startDate: Date;

  // if null, means job is still active
  endDate?: Date;

  constructor(
    name: string,
    startDate: Date,
    endData?: Date,
    details?: string[]
  ) {
    this.id = uuidv4();
    this.name = name;
    this.details = details ?? [];
    this.startDate = startDate;
    this.endDate = endData;
  }

  getYearsInRoleString(): string {
    let yearsInRoleString = null;

    // get start date display string
    let startDateDisplayString = null;

    {
      let startDateMonth = this.startDate.toLocaleString('default', {
        month: 'long',
      });
      let startDateYear = this.startDate.getFullYear().toString();

      // TODO make string formatting method
      startDateDisplayString = `${startDateMonth} ${startDateYear}`;
    }

    let endDateDisplayString = 'current';

    if (this.endDate != null) {
      let endDateMonth = this.endDate.toLocaleString('default', {
        month: 'long',
      });
      let endDateYear = this.endDate.getFullYear().toString();

      endDateDisplayString = `${endDateMonth} ${endDateYear}`;
    }

    yearsInRoleString = `${startDateDisplayString} - ${endDateDisplayString}`;

    return yearsInRoleString;
  }
}
