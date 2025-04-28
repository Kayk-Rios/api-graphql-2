import { Module } from '@nestjs/common';
import { FloodedPlacesService } from './flooded-places.service';
import { FloodedPlacesResolver } from './flooded-places.resolver';

@Module({
  providers: [FloodedPlacesService, FloodedPlacesResolver]
})
export class FloodedPlacesModule {}
