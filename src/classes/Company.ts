import faker from "faker";
import { Location } from "./Location";

export class Company extends Location {
  name: string;
  catchPhrase: string;

  constructor() {
    super();
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
  }
}
