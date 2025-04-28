import { Args, Query, Resolver } from '@nestjs/graphql';
import { FloodedPlacesService } from './flooded-places.service';
import { FloodedPlace } from './flooded-place.model';

@Resolver()
export class FloodedPlacesResolver {
  constructor(private readonly FloodedPlacesService: FloodedPlacesService) {}

  @Query(() => [FloodedPlace])
  async FloodedPlace(): Promise<FloodedPlace[]> {
    return this.FloodedPlacesService.findAll();
  }

  @Query(() => [FloodedPlace])
  async FloodedPlaceByState(
    @Args('state') state: string,
  ): Promise<FloodedPlace[]> {
    return this.FloodedPlacesService.findByState(state);
  }
}
