import { Loader, LoaderOptions } from "google-maps";
import { Location } from "./Location";

import { IMarker } from "./IMarker.interface";

export class Map {
  private googleMap: google.maps.Map;
  loader = new Loader("AIzaSyB6AZ7dmzcZVFIpjhdTkXCZOXxO41gy8Mc", {});

  constructor(divId: string) {
    // return new Promise(async (resolve, reject) => {
    const { location } = new Location();

    //   try {
    //     const google = await loader.load();

    //    new google.maps.Map(document.getElementById(divElemId), {
    //       center: { lat: location.lat, lng: location.lng },
    //       zoom: 8
    //     });
    //   } catch (error) {
    //     reject(error);
    //   }
    //   resolve(this);
    // });

    this.loader.load().then(google => {
      this.googleMap = new google.maps.Map(document.getElementById(divId), {
        center: { lat: location.lat, lng: location.lng },
        zoom: 8
      });
    });
  }

  addMarker(marker: IMarker): void {
    this.loader.load().then(google => {
      new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: marker.location.lat,
          lng: marker.location.lng
        }
      });
    });
  }
}
