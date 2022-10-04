export type UserData = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Adress,
  phone: string,
  website: string,
  company: Company,
}

type Adress = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string,
  },
}

type Company = {
  name: string,
  catchPhrase: string,
  bs: string,
}