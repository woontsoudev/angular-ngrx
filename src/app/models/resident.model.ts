export default interface Resident {
  id: number;
  yardiCustomerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone1: string;
  phone2: string;
  enabled: boolean;
  created: Date;
  updated: Date;
  policies?: any[];
  coveringPolicies?: any[];
}
