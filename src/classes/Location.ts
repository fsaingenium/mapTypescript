import faker from "faker";

export class Location {
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
