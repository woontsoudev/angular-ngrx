export interface Role {
  id: string;
  name: string;
}

export interface User {
  id: string;
  role: Role;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  addressLine1: string;
  addressLine2?: string;
  phone?: string;
  created?: string;
}
