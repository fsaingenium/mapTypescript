import faker from "faker";
import { Location } from "./Location";

export class User extends Location {
  name: string;

  constructor() {
    super();
    this.name = faker.name.firstName();
  }
}
