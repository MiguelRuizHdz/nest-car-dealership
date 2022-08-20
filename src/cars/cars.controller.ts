import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto/index';


@Controller('cars')
// @UsePipes( ValidationPipe )
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
    getCarById( @Param('id', ParseUUIDPipe ) id: string ) {
        console.log({ id });
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar( @Body() createCarDto: CreateCarDto) {
        return this.carsService.create( createCarDto );
    }

    @Patch( ':id' )
    updateCar(  
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto ) {
        return updateCarDto;
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
