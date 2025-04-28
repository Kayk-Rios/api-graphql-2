import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FloodedPlace{
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    state: string;

    @Field(()=> String,{nullable: true})
    imageUrl?: string | null;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}