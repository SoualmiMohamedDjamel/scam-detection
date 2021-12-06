export type Vehicle = {
  make: string;
  model: string;
  version: string;
  category: string;
  registerNumber: string;
  mileage: number;
};

type Phone = {
  value: string;
};

export type Contacts = {
  fisrtName: string;
  lastName: string;
  email: string;
  phone1: Phone;
};

export type Announcement = {
  contacts: Contacts;
  creationDate: string;
  price: number;
  publicationoption: string[];
  reference: string;
  vehicle: Vehicle;
};

export type RulesNames =
  | 'rule::firstname::length'
  | 'rule::lastname::length'
  | 'rule::alpha_rate'
  | 'rule::number_rate'
  | 'rule::price::quotation_rate'
  | 'rule::registernumber::balcklist';

export type Rule = {
  name: RulesNames;
  isRespected: (announcement: Announcement) => Promise<boolean> | boolean;
};

export type Rules = Rule[];

export type ScamDetectionResult = {
  referaece: string;
  scam: boolean;
  rules: RulesNames[];
};
