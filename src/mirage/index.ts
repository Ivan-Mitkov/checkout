import { createServer, Model, Factory, RestSerializer } from "miragejs";
import { faker } from "@faker-js/faker";
import { Product } from "../types";
import { City, Country } from "../types";

export function makeServer() {
  const server = createServer({
    serializers: {
      application: RestSerializer,
    },
    factories: {
      product: Factory.extend<Partial<Product>>({
        get name() {
          return faker.commerce.productName;
        },
        get price() {
          return faker.commerce.price;
        },

        get imageUrl() {
          return faker.image.urlLoremFlickr({ category: "product" });
        },
      }),
      city: Factory.extend<Partial<City>>({
        get name() {
          return faker.location.city;
        },
      }),
    },

    models: {
      product: Model.extend<Partial<Product>>({}),
      country: Model.extend<Partial<Country>>({}),
      city: Model.extend<Partial<City>>({}),
    },

    routes() {
      this.namespace = "api";

      this.get("products");
      this.get("countries");
      this.get("cities");
    },
    fixtures: {
      countries: [
        { id: 1, name: "USA", vat: 20 },
        { id: 2, name: "UK", vat: 22 },
        { id: 3, name: "Germany", vat: 23 },
        { id: 4, name: "France", vat: 25 },
      ],
    },

    seeds(s) {
      s.createList("product", 5);
      s.createList("city", 30);
      s.loadFixtures("countries");
    },
  });

  return server;
}
