export interface Unit {
  id: Number;
  unitId: '100';
  name: string;
  type: string;
  squareFootage: Number;
  bedrooms: Number;
  bathrooms: Number;
  leaseFrom: Date;
  leaseTo: Date;
  enabled: boolean;
  created: Date;
  updated: Date;
  residents: any[];
  // New ones (not coming into model)
  policyEnd: Date;
  coverageProvider: string;
  policyStatus: string;
  paidInFull: boolean;
  atRisk: boolean;
}
