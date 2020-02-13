import { Loader, LoaderOptions } from "google-maps";
import { Location } from "./Location";

export class Map {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    // return new Promise(async (resolve, reject) => {
    const { location } = new Location();

    const loader = new Loader("AIzaSyB6AZ7dmzcZVFIpjhdTkXCZOXxO41gy8Mc", {});
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

    loader.load().then(google => {
      this.googleMap = new google.maps.Map(document.getElementById(divId), {
        center: { lat: location.lat, lng: location.lng },
        zoom: 8
      });
    });
  }

  addMarker() {}
}
