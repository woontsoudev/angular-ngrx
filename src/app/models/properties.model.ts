export interface Property {
  id: Number;
  yardiCode?: string;
  yardiSyncDate: Date;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  county: string;
  country: string;
  occupancyType: string;
  numberOfUnits: Number;
  yearBuilt?: Number;
  gated: true;
  professionallyManaged: boolean;
  professionallyManagedSince: Number;
  mapsShareUrl: string;
  enabled: boolean;
  created: Date;
  updated: Date;
  units: object[];
}
// needs to be renamed
