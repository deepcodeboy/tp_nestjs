import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Leche',
      price: 500,
      stock: 40,
    },
    {
      id: 2,
      name: 'Zucaritas',
      price: 800,
      stock: 50,
    },
  ];

  updateProduct(id, datos): any {
    const productIndex = this.products.findIndex((product) => product.id === id,);
    try {
      if (productIndex !== -1) {
        this.products[productIndex] = Object.assign(
          this.products[productIndex],
          datos,
        );
        return this.products;
      }
    } catch (error) {
      throw new Error('Error en putProduct' + JSON.stringify(error));
    }
  }
  
  listProducts(): Array<Object> {
    try {
      return this.products;
    } catch (error) {
      throw new Error('Error en getListProduct' + JSON.stringify(error));
    }
  }

  listProduct(id): any {
    try {
      return this.products.find((product) => product.id === parseInt(id));
    } catch (error) {
      throw new Error('Error en getOneProduct' + JSON.stringify(error));
    }
  }

  createProduct(datos): any {
    try {
      this.products.push(datos);
      return datos;
    } catch (error) {
      throw new Error('Error en postProduct' + JSON.stringify(error));
    }
  }


  deleteProduct(id): any {
    try {
      this.products.splice(
        this.products.findIndex((obj) => obj.id === parseInt(id)),
        1,
      );
      return this.products;
    } catch (error) {
      throw new Error('Error en deleteProduct' + JSON.stringify(error));
    }
  }
}
