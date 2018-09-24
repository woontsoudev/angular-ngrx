export default interface Unit {
  id: number;
  unitId: '100';
  name: string;
  type: string;
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
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
  primaryPolicyHolder: string;
}
