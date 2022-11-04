export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Redmi 10pro',
    price: 1799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Redmi 10s',
    price: 1699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Redmi 10',
    price: 1299,
    description: 'A phone with a best storage'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/