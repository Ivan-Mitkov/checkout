import { createServer, Model, Factory, RestSerializer } from "miragejs";
import { faker } from "@faker-js/faker";
import { Product } from "../api/productsService";

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
          return faker.commerce.price({ min: 10, max: 100 });
        },
      }),
    },

    models: {
      product: Model.extend<Partial<Product>>({}),
    },

    routes() {
      this.namespace = "api";

      this.get("products");
    },

    seeds(s) {
      s.createList("product", 20);
    },
  });

  return server;
}
