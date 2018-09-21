export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  role: Role;
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  addressLine1: string;
  addressLine2?: string;
  phone?: string;
  created?: string;
}
