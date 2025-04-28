import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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

  @Mutation(() => FloodedPlace)
  async createFloodedPlace(
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('state') state: string,
    @Args('imageUrl') imageUrl?: string,
  ): Promise<FloodedPlace> {
    return this.FloodedPlacesService.create(
      name, 
      description,
      state, 
      imageUrl
    );  
  }
  

}
