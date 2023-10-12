import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api')
export class ProductsController {
  constructor(private readonly appService: ProductsService) { }

 
  @Get('/products')
  getAllProducts(): any {
    return this.appService.listProducts();
  }

  @Get('/products/:id')
  getProduct(@Param("id") id: string): any {
    return this.appService.listProduct(id);
  }

  @Post('/products')
  saveProduct(@Body() datos): any {
    return this.appService.createProduct(datos);
  }

  @Put('/products/:id')
  updateProduct(@Body() datos,@Param("id") id:string): any {
    return this.appService.updateProduct(id,datos);
  }

  @Delete('/products/:id')
  removeProduct(@Param("id") id: string) {
    return this.appService.deleteProduct(id)
  }
}
