import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FloodedPlace } from './flooded-place.model';

@Injectable()
export class FloodedPlacesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<FloodedPlace[]> {
    return this.prisma.floodedPlace.findMany();
  }

  async findByState(state: string): Promise<FloodedPlace[]> {
    return this.prisma.floodedPlace.findMany({
      where: { state },
    });
  }

  async findOne(id: number): Promise<FloodedPlace | null> {
    return this.prisma.floodedPlace.findUnique({
      where: { id },
    });
  }

  async create(
    name: string,
    description: string,
    state: string,
    imageUrl?: string,
  ): Promise<FloodedPlace> {
    return this.prisma.floodedPlace.create({
      data: {
        name,
        description,
        state,
        imageUrl,
      },
    });
  }

  async update(
    id: number,
    name?: string,
    description?: string,
    state?: string,
    imageUrl?: string,
  ): Promise<FloodedPlace> {
    return this.prisma.floodedPlace.update({
      where: { id },
      data: {
        name,
        description,
        state,
        imageUrl,
      },
    });
  }
  async delete(id: number): Promise<FloodedPlace> {
    return this.prisma.floodedPlace.delete({
      where: { id },
    });
  }
}
