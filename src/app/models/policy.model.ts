export default interface Policy {
  id: number;
  carrier: string;
  policyNumber: string;
  liabilityCoverage: number;
  effectiveDate: Date;
  startDate: Date;
  endDate: Date;
  created: Date;
  updated: Date;
  primaryHolder: any;
  coveredResidents: any[];
}
