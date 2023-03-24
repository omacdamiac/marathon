export interface Users {
  name: string;
  username: string;
  email: string;
  address: Address;
  website: string;
  company: Company;
}
interface Address {
  city: string;
}
interface Company {
  name: string;
}
