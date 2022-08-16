import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        // Inyección de dependencias
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get( ':id' )
    getCarById( @Param('id', ParseIntPipe) id: number ) {
        console.log({ id });
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar( @Body() req: any) {
        return req;
    }

    @Patch( ':id' )
    updateCar(  
        @Param('id', ParseIntPipe) id: number,
        @Body() req: any ) {
        return req;
    }

    @Delete( ':id' )
    deleteCar(  @Param('id', ParseIntPipe) id: number ) {
        return {
            method: 'delete',
            id
        };
    }
    


    // @Put()

}
