export type CartItem = {
  name: string;
  price: number;
  imageUrl?: string;
};

export interface KeyboardEvent {
  key: string;
}

export type City = {
  id: string;
  name: string;
  country?: Country;
};

export type Country = {
  id: string;
  name: string;
  vat: number;
};

export type SelectOptions = {
  label: string;
  value: string;
}[];

export type Rules = {
  [key: string]: {
    validator: (value: any) => boolean;
    errorMessage: string;
  };
};
