import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FloodedPlacesService } from './flooded-places.service';
import { FloodedPlace } from './flooded-place.model';
import { CreateFloodedPlaceInput } from './dto/create-flooded-place.input';
import { UpdateFloodedPlaceInput } from './dto/update-flooded-place.input';

@Resolver()
export class FloodedPlacesResolver {
  constructor(private readonly FloodedPlacesService: FloodedPlacesService) {}

  @Query(() => [FloodedPlace])
  async FloodedPlace(): Promise<FloodedPlace[]> {
    return this.FloodedPlacesService.findAll();
  }

  @Query(() => [FloodedPlace], { name: 'floodedPlacesByState' })
  async findByState(
    @Args('state') state: string,
  ): Promise<FloodedPlace[]> {
    return this.FloodedPlacesService.findByState(state);
  }


  @Mutation(() => FloodedPlace)
  async createFloodedPlace(
    @Args('input') input: CreateFloodedPlaceInput,
  ): Promise<FloodedPlace> {
    return this.FloodedPlacesService.create(
      input.name,
      input.description,
      input.state,
      input.imageUrl,
    );
  }

  @Mutation(() => FloodedPlace)
  async updateFloodedPlace(
    @Args('input') input: UpdateFloodedPlaceInput,
  ): Promise<FloodedPlace> {
    return this.FloodedPlacesService.update(
      input.id,
      input.name,
      input.description,
      input.state,
      input.imageUrl,
    );
  }

  @Mutation(() => FloodedPlace)
  async deleteFloodedPlace(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<FloodedPlace> {
    return this.FloodedPlacesService.delete(id);
  }
}
