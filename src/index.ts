import { User } from "./classes/User";
import { Map } from "./classes/Map";
import { Company } from "./classes/Company";

const newMap = new Map("map");
newMap.addMarker(new User());
newMap.addMarker(new Company());
